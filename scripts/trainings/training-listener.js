import {
  TRAINING_APTITUDE_OPTIONS,
  TRAINING_PHYSICAL_ATTRIBUTE_OPTIONS,
  avaliarRequisitoTreinamento,
  obterPendenciasSequencia
} from "./training-config.js";
import { calcularBonusTreinamentos, calcularRecursosEfetivos } from "./training-calculations.js";

export function registerTrainingListener(sheet, html) {
  sheet._jkCollapsedTrainings ??= new Set();

  html.find(".jk-training-card").each((_, card) => {
    const key = card.dataset.trainingKey;
    if (key && sheet._jkCollapsedTrainings.has(key)) aplicarEstadoRecolhido(card, true);
  });

  html.find(".jk-training-collapse-toggle").on("click", event => {
    event.preventDefault();
    event.stopPropagation();
    const button = event.currentTarget;
    const card = button.closest(".jk-training-card");
    const key = button.dataset.training || card?.dataset.trainingKey;
    if (!card || !key) return;

    const recolhido = !card.classList.contains("is-collapsed");
    aplicarEstadoRecolhido(card, recolhido);
    if (recolhido) sheet._jkCollapsedTrainings.add(key);
    else sheet._jkCollapsedTrainings.delete(key);
  });
  registrarReordenacaoTreinamentos(sheet, html);

  html.find(".jk-training-stage-input").on("change", async event => {
    event.preventDefault();
    event.stopImmediatePropagation();

    const input = event.currentTarget;
    const treino = input.dataset.training;
    const etapa = input.dataset.stage;
    if (!treino || !etapa) return;

    const checked = Boolean(input.checked);
    const updateData = {
      [`system.treinamentos.${treino}.etapas.${etapa}`]: checked
    };

    if (checked) {
      const numeroEtapa = Number(String(etapa).replace("e", "")) || 0;
      const autorizado = await confirmarAquisicaoEtapa(sheet, treino, numeroEtapa);
      if (!autorizado) {
        input.checked = false;
        input.closest(".jk-training-stage")?.classList.remove("is-active");
        return;
      }

      const escolhaOk = await prepararEscolhaAoMarcar(sheet, treino, etapa, updateData);
      if (!escolhaOk) {
        input.checked = false;
        input.closest(".jk-training-stage")?.classList.remove("is-active");
        return;
      }
    } else {
      const numeroEtapa = Number(String(etapa).replace("e", "")) || 0;
      const autorizado = await prepararRemocaoSequencial(sheet, treino, numeroEtapa, updateData);
      if (!autorizado) {
        input.checked = true;
        input.closest(".jk-training-stage")?.classList.add("is-active");
        return;
      }
      limparEscolhaAoDesmarcar(sheet, treino, etapa, updateData);
    }

    await sheet.actor.update(updateData, { render: false });
    await ajustarRecursosAoNovoMaximo(sheet.actor);
    rerenderPreservandoAba(sheet, html);
  });

  html.find(".jk-training-progress-input").on("input", event => {
    atualizarBarraProgresso(event.currentTarget.closest(".jk-training-card"));
  });

  html.find(".jk-training-progress-input").on("change", async event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const input = event.currentTarget;
    const path = input.name;
    if (!path) return;
    await sheet.actor.update({ [path]: Math.max(0, Number(input.value) || 0) }, { render: false });
  });

  // Aptidões exibem o valor efetivo, mas persistem somente o valor-base.
  html.find(".jk-training-derived-aptitude").on("change", async event => {
    event.preventDefault();
    event.stopImmediatePropagation();

    const input = event.currentTarget;
    const aptidao = input.dataset.aptitude;
    const path = input.dataset.path;
    if (!aptidao || !path) return;

    const bonus =
      Number(calcularBonusTreinamentos(sheet.actor.system).aptidoes?.[aptidao]) || 0;

    const totalDigitado = Number(input.value) || 0;
    const valorBase = totalDigitado - bonus;

    await sheet.actor.update({ [path]: valorBase }, { render: false });

    input.value = String(valorBase + bonus);
    html.find(`input[type="hidden"][name="${path}"]`).val(valorBase);

    // Aptidões alimentam requisitos de Treinamentos. Um novo render garante
    // que o alerta apareça/desapareça imediatamente quando o requisito mudar.
    rerenderPreservandoAba(sheet, html);
  });

  // Os máximos de PV/PE/Estamina exibem o total efetivo (base + treino),
  // mas continuam salvando apenas a parcela base para evitar duplicação.
  html.find(".jk-training-derived-resource-max").on("change", async event => {
    event.preventDefault();
    event.stopImmediatePropagation();

    const input = event.currentTarget;
    const recurso = input.dataset.resource;
    const path = input.dataset.path;
    if (!recurso || !path) return;

    const totalDigitado = Math.max(0, Number(input.value) || 0);
    const bonus = Number(calcularBonusTreinamentos(sheet.actor.system).recursos?.[recurso]) || 0;
    const valorBase = Math.max(0, totalDigitado - bonus);

    await sheet.actor.update({ [path]: valorBase }, { render: false });
    input.value = String(valorBase + bonus);
  });
}


async function confirmarAquisicaoEtapa(sheet, treino, numeroEtapa) {
  const requisito = avaliarRequisitoTreinamento(sheet.actor.system, treino, numeroEtapa);
  const pendencias = obterPendenciasSequencia(sheet.actor.system, treino, numeroEtapa);
  const problemas = [];

  if (pendencias.length) {
    problemas.push(`Etapas anteriores não adquiridas: ${pendencias.map(n => `${n}ª`).join(", ")}.`);
  }

  if (requisito.manual) {
    problemas.push(`<strong>Requisito com verificação manual:</strong> ${escapeHtml(requisito.texto)}.<br>${escapeHtml(requisito.detalhe)}`);
  } else if (!requisito.cumprido) {
    problemas.push(`<strong>Requisito não cumprido:</strong> ${escapeHtml(requisito.texto)}.<br>${escapeHtml(requisito.detalhe)}`);
  }

  if (!problemas.length) return true;

  return confirmarExcecao({
    title: "Confirmar aquisição de etapa",
    content: `
      <div class="jk-training-confirmation">
        <p>${problemas.join("</p><p>")}</p>
        <p>Deseja adquirir a etapa mesmo assim?</p>
      </div>
    `,
    yes: "Adquirir mesmo assim"
  });
}

async function prepararRemocaoSequencial(sheet, treino, numeroEtapa, updateData) {
  const etapas = sheet.actor.system.treinamentos?.[treino]?.etapas ?? {};
  const posterioresAtivas = [];

  for (let numero = numeroEtapa + 1; numero <= 4; numero += 1) {
    if (etapas[`e${numero}`]) posterioresAtivas.push(numero);
  }

  if (!posterioresAtivas.length) return true;

  const confirmado = await confirmarExcecao({
    title: "Remover etapas posteriores?",
    content: `
      <div class="jk-training-confirmation">
        <p>A ${numeroEtapa}ª Etapa possui etapas posteriores ativas: <strong>${posterioresAtivas.map(n => `${n}ª`).join(", ")}</strong>.</p>
        <p>Para manter a progressão sequencial, elas também serão desmarcadas.</p>
      </div>
    `,
    yes: "Remover etapas"
  });

  if (!confirmado) return false;

  for (const numero of posterioresAtivas) {
    const etapaPosterior = `e${numero}`;
    updateData[`system.treinamentos.${treino}.etapas.${etapaPosterior}`] = false;

    // Também limpa escolhas vinculadas a etapas removidas em cascata.
    // Evita dados órfãos que poderiam reaparecer ao adquirir a etapa novamente.
    limparEscolhaAoDesmarcar(sheet, treino, etapaPosterior, updateData);
  }

  return true;
}

async function confirmarExcecao({ title, content, yes }) {
  return Dialog.confirm({
    title,
    content,
    yes: () => true,
    no: () => false,
    defaultYes: false,
    options: { classes: ["jk-training-confirm-dialog"] }
  }).then(result => Boolean(result));
}

async function prepararEscolhaAoMarcar(sheet, treino, etapa, updateData) {
  if (treino === "potencialFisico" && etapa === "e2") {
    const atributos = await escolherAtributosFisicos();
    if (!atributos) return false;

    updateData["system.treinamentos.potencialFisico.atributoPonto1"] = atributos[0];
    updateData["system.treinamentos.potencialFisico.atributoPonto2"] = atributos[1];
  }

  if (
    treino === "compreensao" &&
    ficaraCompleto(sheet.actor.system, treino, etapa, true)
  ) {
    const aptidao = await escolherOpcao({
      title: "Treino de Compreensão",
      label: "Aptidão beneficiada",
      options: TRAINING_APTITUDE_OPTIONS,
      value: sheet.actor.system.treinamentos?.compreensao?.aptidaoEscolhida ?? ""
    });

    if (!aptidao) {
      ui.notifications.warn("Selecione uma aptidão para concluir o treinamento.");
      return false;
    }

    updateData["system.treinamentos.compreensao.aptidaoEscolhida"] = aptidao;
  }

  return true;
}

function limparEscolhaAoDesmarcar(sheet, treino, etapa, updateData) {
  if (treino === "potencialFisico" && etapa === "e2") {
    updateData["system.treinamentos.potencialFisico.atributoPonto1"] = "";
    updateData["system.treinamentos.potencialFisico.atributoPonto2"] = "";
  }

  if (treino === "compreensao") {
    const estavaCompleto = ["e1", "e2", "e3", "e4"].every(
      key => Boolean(sheet.actor.system.treinamentos?.compreensao?.etapas?.[key])
    );

    if (estavaCompleto) {
      updateData["system.treinamentos.compreensao.aptidaoEscolhida"] = "";
    }
  }
}

function ficaraCompleto(system, treino, etapaAlterada, novoValor) {
  return ["e1", "e2", "e3", "e4"].every(key =>
    key === etapaAlterada
      ? novoValor
      : Boolean(system.treinamentos?.[treino]?.etapas?.[key])
  );
}

async function escolherAtributosFisicos() {
  const optionsHtml = montarOptions(TRAINING_PHYSICAL_ATTRIBUTE_OPTIONS, "", true);
  const result = await Dialog.prompt({
    title: "Potencial Físico — 2ª Etapa",
    content: `
      <form class="jk-training-dialog-form">
        <p>Distribua os 2 pontos entre seus atributos físicos. É permitido selecionar o mesmo atributo duas vezes.</p>
        <div class="form-group">
          <label>1º ponto</label>
          <select name="atributo1">${optionsHtml}</select>
        </div>
        <div class="form-group">
          <label>2º ponto</label>
          <select name="atributo2">${optionsHtml}</select>
        </div>
      </form>
    `,
    label: "Confirmar",
    callback: html => {
      const a1 = html.find('[name="atributo1"]').val();
      const a2 = html.find('[name="atributo2"]').val();
      return a1 && a2 ? [a1, a2] : null;
    },
    rejectClose: false
  });

  if (!result) ui.notifications.warn("Selecione os dois pontos de atributo para adquirir esta etapa.");
  return result;
}

async function escolherOpcao({ title, label, options, value = "" }) {
  const optionsHtml = montarOptions(options, value, false);
  const result = await Dialog.prompt({
    title,
    content: `
      <form class="jk-training-dialog-form">
        <div class="form-group">
          <label>${label}</label>
          <select name="escolha">${optionsHtml}</select>
        </div>
      </form>
    `,
    label: "Confirmar",
    callback: html => html.find('[name="escolha"]').val() || null,
    rejectClose: false
  });

  return result || null;
}

function montarOptions(options, selected = "", ignorarVazio = false) {
  return Object.entries(options ?? {})
    .filter(([value]) => !ignorarVazio || value)
    .map(([value, label]) =>
      `<option value="${escapeHtml(value)}" ${value === selected ? "selected" : ""}>${escapeHtml(label)}</option>`
    )
    .join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function atualizarBarraProgresso(card) {
  if (!card) return;
  const atual = Math.max(0, Number(card.querySelector('[data-progress="current"]')?.value) || 0);
  const meta = Math.max(0, Number(card.querySelector('[data-progress="target"]')?.value) || 0);
  const percentual = meta > 0 ? Math.min(100, (atual / meta) * 100) : 0;
  const fill = card.querySelector(".jk-training-progress-fill");
  if (fill) fill.style.width = `${percentual}%`;
}

async function ajustarRecursosAoNovoMaximo(actor) {
  const efetivos = calcularRecursosEfetivos(actor.system);
  const updateData = {};

  for (const recurso of ["pv", "pe", "estamina"]) {
    const atual = Number(actor.system.recursos?.[recurso]?.atual) || 0;
    const maximo = Number(efetivos?.[recurso]?.total) || 0;

    if (maximo >= 0 && atual > maximo) {
      updateData[`system.recursos.${recurso}.atual`] = maximo;
    }
  }

  if (Object.keys(updateData).length) {
    await actor.update(updateData, { render: false });
  }
}

function rerenderPreservandoAba(sheet, html) {
  const activeTab = sheet._tabs?.[0]?.active ?? "treinamentos";
  const body = html.find(".sheet-body")[0];
  sheet._jkTrainingReturnTab = activeTab;
  sheet._jkTrainingScrollTop = body?.scrollTop ?? 0;
  sheet.render(false);
}



function registrarReordenacaoTreinamentos(sheet, html) {
  const grid = html.find(".jk-training-grid")[0];
  if (!grid) return;

  let cardArrastado = null;

  html.find(".jk-training-drag-handle").each((_, handle) => {
    handle.addEventListener("dragstart", event => {
      const card = handle.closest(".jk-training-card");
      if (!card) return;

      cardArrastado = card;
      card.classList.add("is-dragging");

      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", card.dataset.trainingKey ?? "");
      }
    });

    handle.addEventListener("dragend", () => {
      cardArrastado?.classList.remove("is-dragging");
      grid.querySelectorAll(".jk-training-card.is-drag-over").forEach(card => {
        card.classList.remove("is-drag-over");
      });
      cardArrastado = null;
    });
  });

  html.find(".jk-training-card").each((_, card) => {
    card.addEventListener("dragover", event => {
      if (!cardArrastado || card === cardArrastado) return;
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
      card.classList.add("is-drag-over");
    });

    card.addEventListener("dragleave", event => {
      if (!card.contains(event.relatedTarget)) card.classList.remove("is-drag-over");
    });

    card.addEventListener("drop", async event => {
      if (!cardArrastado || card === cardArrastado) return;
      event.preventDefault();
      event.stopPropagation();
      card.classList.remove("is-drag-over");

      const rect = card.getBoundingClientRect();
      const distanciaVertical = Math.abs(event.clientY - (rect.top + rect.height / 2));
      const distanciaHorizontal = Math.abs(event.clientX - (rect.left + rect.width / 2));
      const inserirAntes = distanciaVertical > distanciaHorizontal
        ? event.clientY < rect.top + rect.height / 2
        : event.clientX < rect.left + rect.width / 2;

      grid.insertBefore(cardArrastado, inserirAntes ? card : card.nextSibling);

      const ordem = Array.from(grid.querySelectorAll(".jk-training-card"))
        .map(item => item.dataset.trainingKey)
        .filter(Boolean);

      await sheet.actor.update({ "system.treinamentos.ordem": ordem }, { render: false });
    });
  });
}

function aplicarEstadoRecolhido(card, recolhido) {
  card.classList.toggle("is-collapsed", recolhido);
  const button = card.querySelector(".jk-training-collapse-toggle");
  if (!button) return;
  button.setAttribute("aria-expanded", String(!recolhido));
  button.setAttribute("title", recolhido ? "Expandir treinamento" : "Recolher treinamento");
  button.setAttribute("aria-label", recolhido ? "Expandir treinamento" : "Recolher treinamento");
  const icon = button.querySelector("i");
  icon?.classList.toggle("fa-chevron-up", !recolhido);
  icon?.classList.toggle("fa-chevron-down", recolhido);
}

