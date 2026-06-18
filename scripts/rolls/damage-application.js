export function registerDamageApplicationHooks() {
  Hooks.on("renderChatMessage", (message, html) => {
    const root = html instanceof HTMLElement ? html : html?.[0];
    if (!root) return;

    const damageButtons = root.querySelectorAll(".jk-apply-damage");
    for (const button of damageButtons) {
      button.addEventListener("click", async event => {
        event.preventDefault();
        event.stopPropagation();

        await applyDamageFromMessage(message);
      });
    }

    const healingButtons = root.querySelectorAll(".jk-apply-healing");
    for (const button of healingButtons) {
      button.addEventListener("click", async event => {
        event.preventDefault();
        event.stopPropagation();

        await applyHealingFromMessage(message, button);
      });
    }
  });
}

async function applyDamageFromMessage(message) {
  const damage = getMessageDamageTotal(message);

  if (!Number.isFinite(damage) || damage <= 0) {
    ui.notifications?.warn("Não foi possível identificar um dano válido nesta rolagem.");
    return;
  }

  const targetActor = getSingleTargetActor();
  if (!targetActor) return;

  if (!targetActor.isOwner && !game.user?.isGM) {
    ui.notifications?.warn("Você não tem permissão para alterar os PV deste alvo.");
    return;
  }

  const result = calculateDamageApplication(targetActor, damage);

  await targetActor.update({
    "system.recursos.pv.temp": result.tempFinal,
    "system.recursos.pv.atual": result.pvFinal
  });

  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor: targetActor }),
    content: buildDamageApplicationMessage(targetActor, result)
  });
}

async function applyHealingFromMessage(message, button) {
  const healing = getHealingTotal(message, button);

  if (!Number.isFinite(healing) || healing <= 0) {
    ui.notifications?.warn("Não foi possível identificar uma cura válida nesta rolagem.");
    return;
  }

  const targetActor = getSingleTargetActor("aplicar a cura");
  if (!targetActor) return;

  if (!targetActor.isOwner && !game.user?.isGM) {
    ui.notifications?.warn("Você não tem permissão para alterar os PV deste alvo.");
    return;
  }

  const result = calculateHealingApplication(targetActor, healing);

  await targetActor.update({
    "system.recursos.pv.atual": result.pvFinal
  });

  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor: targetActor }),
    content: buildHealingApplicationMessage(targetActor, result)
  });
}

function getMessageDamageTotal(message) {
  const roll = message?.rolls?.[0] ?? message?.roll;
  return Number(roll?.total);
}

function getHealingTotal(message, button) {
  const buttonValue = Number(button?.dataset?.healing);
  if (Number.isFinite(buttonValue)) return buttonValue;

  const roll = message?.rolls?.[0] ?? message?.roll;
  return Number(roll?.total);
}

function getSingleTargetActor(actionLabel = "aplicar o dano") {
  const controlledTokens = canvas?.tokens?.controlled ?? [];
  const targetedTokens = Array.from(game.user?.targets ?? []);

  const candidates = controlledTokens.length === 1
    ? controlledTokens
    : targetedTokens;

  if (candidates.length !== 1) {
    ui.notifications?.warn(`Selecione um token ou marque exatamente um alvo para ${actionLabel}.`);
    return null;
  }

  const actor = candidates[0]?.actor;
  if (!actor) {
    ui.notifications?.warn("O alvo selecionado não possui ator vinculado.");
    return null;
  }

  return actor;
}

function calculateDamageApplication(actor, damage) {
  const pvAtual = getNumber(actor.system?.recursos?.pv?.atual);
  const tempAtual = getNumber(actor.system?.recursos?.pv?.temp);
  const dano = Math.max(0, Math.floor(Number(damage) || 0));

  const absorvidoPorTemp = Math.min(tempAtual, dano);
  const danoRestante = Math.max(0, dano - absorvidoPorTemp);

  const tempFinal = Math.max(0, tempAtual - absorvidoPorTemp);
  const pvFinal = Math.max(0, pvAtual - danoRestante);

  return {
    dano,
    pvInicial: pvAtual,
    pvFinal,
    tempInicial: tempAtual,
    tempFinal,
    absorvidoPorTemp,
    danoAplicadoPV: danoRestante
  };
}

function calculateHealingApplication(actor, healing) {
  const pvAtual = getNumber(actor.system?.recursos?.pv?.atual);
  const pvMax = getNumber(actor.system?.recursos?.pv?.max);
  const cura = Math.max(0, Math.floor(Number(healing) || 0));
  const pvFinal = pvMax > 0
    ? Math.min(pvMax, pvAtual + cura)
    : pvAtual + cura;
  const curaAplicada = Math.max(0, pvFinal - pvAtual);

  return {
    cura,
    curaAplicada,
    pvInicial: pvAtual,
    pvFinal,
    pvMax
  };
}

function buildDamageApplicationMessage(actor, result) {
  return `
    <div class="jk-damage-application-message">
      <strong>Dano aplicado: ${escapeHtml(actor.name)}</strong><br>
      Dano total: ${result.dano}<br>
      ${result.absorvidoPorTemp > 0 ? `PV Temporário absorveu: ${result.absorvidoPorTemp}<br>` : ""}
      PV: ${result.pvInicial} → ${result.pvFinal}
      ${result.tempInicial > 0 ? `<br>PV Temporário: ${result.tempInicial} → ${result.tempFinal}` : ""}
    </div>
  `;
}

function buildHealingApplicationMessage(actor, result) {
  return `
    <div class="jk-healing-application-message">
      <strong>Cura aplicada: ${escapeHtml(actor.name)}</strong><br>
      Cura total: ${result.cura}<br>
      Cura efetiva: ${result.curaAplicada}<br>
      PV: ${result.pvInicial} → ${result.pvFinal}${result.pvMax > 0 ? ` / ${result.pvMax}` : ""}
    </div>
  `;
}

function getNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

