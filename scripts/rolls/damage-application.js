import { obterMaximoRecursoEfetivo } from "../trainings/training-calculations.js";
export function registerDamageApplicationHooks() {
  Hooks.on("renderChatMessage", (message, html) => {
    const root = html instanceof HTMLElement ? html : html?.[0];
    if (!root) return;

    const damageButtons = root.querySelectorAll(".jk-apply-damage");
    for (const button of damageButtons) {
      button.addEventListener("click", async event => {
        event.preventDefault();
        event.stopPropagation();

        await applyDamageFromMessage(message, button);
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

    const ammoButtons = root.querySelectorAll(".jk-spend-ammo-chat");
    for (const button of ammoButtons) {
      button.addEventListener("click", async event => {
        event.preventDefault();
        event.stopPropagation();

        await spendAmmoFromChat(button);
      });
    }
  });
}

async function applyDamageFromMessage(message, button) {
  const damage = getMessageDamageTotal(message, button);

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

  ui.notifications?.info(`Dano aplicado em ${targetActor.name}: ${result.dano}.`);
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

  ui.notifications?.info(`Cura aplicada em ${targetActor.name}: ${result.curaAplicada}.`);
}

async function spendAmmoFromChat(button) {
  const actorId = button?.dataset?.actorId;
  const itemId = button?.dataset?.itemId;
  const actor = game.actors?.get(actorId);
  const item = actor?.items?.get(itemId);

  if (!actor || !item) {
    ui.notifications?.warn("Não foi possível encontrar a arma na ficha.");
    return;
  }

  if (!actor.isOwner && !game.user?.isGM) {
    ui.notifications?.warn("Você não tem permissão para alterar esta ficha.");
    return;
  }

  const tipoConsumo = item.system?.arma?.consumivel ?? "";
  if (!tipoConsumo) {
    ui.notifications?.info("Esta arma não usa munição ou recurso.");
    return;
  }

  const atual = Number(item.system?.arma?.municaoAtual) || 0;
  if (atual <= 0) {
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor }),
      content: "Você não tem munição."
    });
    return;
  }

  await item.update({ "system.arma.municaoAtual": Math.max(0, atual - 1) });
  ui.notifications?.info(`${item.name}: munição/recurso restante ${Math.max(0, atual - 1)}.`);
}

function getMessageDamageTotal(message, button) {
  const buttonValue = Number(button?.dataset?.damage);
  if (Number.isFinite(buttonValue)) return buttonValue;

  const roll = message?.rolls?.[1] ?? message?.rolls?.[0] ?? message?.roll;
  return Number(roll?.total);
}

function getHealingTotal(message, button) {
  const buttonValue = Number(button?.dataset?.healing);
  if (Number.isFinite(buttonValue)) return buttonValue;

  const roll = message?.rolls?.[1] ?? message?.rolls?.[0] ?? message?.roll;
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
  const pvMax = obterMaximoRecursoEfetivo(actor.system, "pv");
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

function getNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}


