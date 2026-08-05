import { rollWeaponAttack } from "../rolls/attack-rolls.js";

const TIPOS_ITEM_INVENTARIO = ["arma", "equipamento", "consumivel", "tesouro"];

const NOMES_ITEM_PADRAO = {
  arma: "Novo Ataque",
  equipamento: "Novo Equipamento",
  consumivel: "Novo Consumível",
  tesouro: "Novo Tesouro"
};

function extrairPrefixo(key) {
  return key.replace(/\d+$/, "");
}

function gerarProximaChave(colecao, prefixo) {
  const indices = Object.keys(colecao ?? {})
    .map(k => parseInt(String(k).replace(prefixo, ""), 10))
    .filter(n => Number.isFinite(n) && n > 0);
  return `${prefixo}${indices.length ? Math.max(...indices) + 1 : 1}`;
}

function filtrarColecao(obj, prefixo) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return {};
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const n = parseInt(String(k).replace(prefixo, ""), 10);
    if (Number.isFinite(n) && n > 0) out[k] = v;
  }
  return out;
}

export function registerCombatListener(sheet, html) {
  html.find(".jk-create-actor-item").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const itemType = event.currentTarget.dataset.itemType;
    if (!TIPOS_ITEM_INVENTARIO.includes(itemType)) return;

    const [item] = await sheet.actor.createEmbeddedDocuments("Item", [{
      name: NOMES_ITEM_PADRAO[itemType],
      type: itemType
    }]);

    item?.sheet?.render(true);
  });

  html.find(".jk-edit-actor-item").on("click", event => {
    event.preventDefault();
    event.stopPropagation();

    const item = obterItemDoEvento(sheet.actor, event.currentTarget);
    item?.sheet?.render(true);
  });

  registrarOrdenacaoInventario(sheet, html);
  registrarOrdenacaoHabilidades(sheet, html);
  registrarMenuContextoInventario(sheet, html);
  html.find(".jk-add-combat-row").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const { path, prefix } = event.currentTarget.dataset;
    if (!path || !prefix) return;

    const current = foundry.utils.getProperty(sheet.actor.system, path);
    const limpa = filtrarColecao(current, prefix);
    const key = gerarProximaChave(limpa, prefix);

    const novoItem = criarItemPadrao(prefix);
    if (prefix === "habilidade") {
      const ordens = Object.values(limpa)
        .map(item => Number(item?.ordem))
        .filter(Number.isFinite);
      novoItem.ordem = ordens.length ? Math.max(...ordens) + 1000 : (Object.keys(limpa).length + 1) * 1000;
    }

    await sheet.actor.update({
      [`system.${path}.${key}`]: novoItem
    });

    sheet.render(true);
  });

  html.find(".jk-remove-combat-row").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const { path, key } = event.currentTarget.dataset;
    if (!path || !key) return;

    const prefix = extrairPrefixo(key);
    const current = foundry.utils.getProperty(sheet.actor.system, path);
    const limpa = filtrarColecao(current, prefix);

    const updateData = {
      [`system.${path}.-=${key}`]: null
    };

    const outrasChaves = Object.keys(limpa).filter(k => k !== key);
    if (outrasChaves.length === 0) {
      for (const k of Object.keys(current ?? {})) {
        if (k === key) continue;
        const n = parseInt(String(k).replace(prefix, ""), 10);
        if (!Number.isFinite(n) || n <= 0) {
          updateData[`system.${path}.-=${k}`] = null;
        }
      }
    }

    await sheet.actor.update(updateData);
    sheet.render(true);
  });

  html.find(".jk-toggle-description-row").on("click", event => {
    event.preventDefault();
    event.stopPropagation();

    const target = event.currentTarget.dataset.target;
    if (!target) return;

    html.find(`.jk-description-row[data-row="${target}"]`).toggleClass("is-open");
  });

  html.find(".jk-roll-habilidade").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const key = event.currentTarget.dataset.key;
    if (!key) return;

    await enviarHabilidadeParaChat(sheet.actor, key);
  });

  html.find(".jk-toggle-equipped").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const itemId = event.currentTarget.dataset.itemId;
    if (!itemId) return;

    const item = sheet.actor.items.get(itemId);
    if (!item) return;

    const categoria = obterCategoriaItem(item);
    if (categoria !== "equipamento") {
      ui.notifications?.warn("Apenas equipamentos podem ser equipados ou desequipados por esta lista.");
      return;
    }

    const vaiEquipar = !Boolean(item.system?.equipado);
    const updates = [];

    if (vaiEquipar && equipamentoEhVestimento(item)) {
      for (const outro of sheet.actor.items ?? []) {
        if (outro.id === item.id) continue;
        if (obterCategoriaItem(outro) !== "equipamento") continue;
        if (!equipamentoEhVestimento(outro)) continue;
        if (!outro.system?.equipado) continue;

        updates.push({ _id: outro.id, "system.equipado": false });
      }
    }

    updates.push({ _id: item.id, "system.equipado": vaiEquipar });
    await sheet.actor.updateEmbeddedDocuments("Item", updates);
    await atualizarDefesaEquipamentos(sheet.actor);

    sheet.render(false);
  });

  html.find(".jk-consume-ammo").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const itemId = event.currentTarget.dataset.itemId;
    if (!itemId) return;

    await consumirMunicaoOuRecurso(sheet.actor, itemId);
    sheet.render(false);
  });

  html.find(".jk-roll-weapon-attack").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const itemId = event.currentTarget.dataset.itemId;
    if (!itemId) return;

    await rollWeaponAttack(sheet.actor, itemId);
  });

  html.find(".jk-delete-actor-item").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const itemId = event.currentTarget.dataset.itemId;
    if (!itemId) return;

    await sheet.actor.deleteEmbeddedDocuments("Item", [itemId]);
    await atualizarDefesaEquipamentos(sheet.actor);
    sheet.render(true);
  });
}

function obterItemDoEvento(actor, element) {
  const itemId = element?.dataset?.itemId ?? element?.closest?.("[data-item-id]")?.dataset?.itemId;
  return itemId ? actor.items.get(itemId) : null;
}

function registrarOrdenacaoInventario(sheet, html) {
  let draggedRow = null;

  html.find(".jk-drag-item[draggable='true']").on("dragstart", event => {
    draggedRow = event.currentTarget.closest(".jk-inventory-row");
    if (!draggedRow) return;
    draggedRow.classList.add("is-dragging");
    event.originalEvent.dataTransfer.effectAllowed = "move";
    event.originalEvent.dataTransfer.setData("text/plain", draggedRow.dataset.itemId ?? "");
  });

  html.find(".jk-drag-item[draggable='true']").on("dragend", () => {
    draggedRow?.classList.remove("is-dragging");
    html.find(".jk-inventory-row").removeClass("is-drop-target");
    draggedRow = null;
  });

  html.find(".jk-inventory-row").on("dragover", event => {
    event.preventDefault();
    if (!draggedRow || draggedRow === event.currentTarget) return;
    if (draggedRow.closest("tbody") !== event.currentTarget.closest("tbody")) return;

    html.find(".jk-inventory-row").removeClass("is-drop-target");
    event.currentTarget.classList.add("is-drop-target");
    event.originalEvent.dataTransfer.dropEffect = "move";
  });

  html.find(".jk-inventory-row").on("drop", async event => {
    event.preventDefault();
    const targetRow = event.currentTarget;
    if (!draggedRow || draggedRow === targetRow) return;
    if (draggedRow.closest("tbody") !== targetRow.closest("tbody")) return;

    const tbody = targetRow.closest("tbody");
    const rect = targetRow.getBoundingClientRect();
    const inserirDepois = event.originalEvent.clientY > rect.top + rect.height / 2;
    targetRow.insertAdjacentElement(inserirDepois ? "afterend" : "beforebegin", draggedRow);

    const updates = [...tbody.querySelectorAll(".jk-inventory-row[data-item-id]")].map((row, index) => ({
      _id: row.dataset.itemId,
      sort: (index + 1) * 1000
    }));

    if (updates.length) await sheet.actor.updateEmbeddedDocuments("Item", updates);
    sheet.render(false);
  });
}

function registrarOrdenacaoHabilidades(sheet, html) {
  let draggedRow = null;

  html.find(".jk-drag-ability[draggable='true']").on("dragstart", event => {
    draggedRow = event.currentTarget.closest(".jk-ability-row");
    if (!draggedRow) return;
    draggedRow.classList.add("is-dragging");
    event.originalEvent.dataTransfer.effectAllowed = "move";
    event.originalEvent.dataTransfer.setData("text/plain", draggedRow.dataset.abilityKey ?? "");
  });

  html.find(".jk-drag-ability[draggable='true']").on("dragend", () => {
    draggedRow?.classList.remove("is-dragging");
    html.find(".jk-ability-row").removeClass("is-drop-target");
    draggedRow = null;
  });

  html.find(".jk-ability-row").on("dragover", event => {
    event.preventDefault();
    if (!draggedRow || draggedRow === event.currentTarget) return;
    html.find(".jk-ability-row").removeClass("is-drop-target");
    event.currentTarget.classList.add("is-drop-target");
    event.originalEvent.dataTransfer.dropEffect = "move";
  });

  html.find(".jk-ability-row").on("drop", async event => {
    event.preventDefault();
    const targetRow = event.currentTarget;
    if (!draggedRow || draggedRow === targetRow) return;

    const draggedDescription = draggedRow.nextElementSibling?.classList?.contains("jk-description-row")
      ? draggedRow.nextElementSibling
      : null;
    const targetDescription = targetRow.nextElementSibling?.classList?.contains("jk-description-row")
      ? targetRow.nextElementSibling
      : null;
    const rect = targetRow.getBoundingClientRect();
    const inserirDepois = event.originalEvent.clientY > rect.top + rect.height / 2;

    if (inserirDepois) {
      (targetDescription ?? targetRow).insertAdjacentElement("afterend", draggedRow);
      if (draggedDescription) draggedRow.insertAdjacentElement("afterend", draggedDescription);
    } else {
      targetRow.insertAdjacentElement("beforebegin", draggedRow);
      if (draggedDescription) draggedRow.insertAdjacentElement("afterend", draggedDescription);
    }

    const updateData = {};
    [...targetRow.closest("tbody").querySelectorAll(".jk-ability-row[data-ability-key]")].forEach((row, index) => {
      updateData[`system.combate.habilidades.${row.dataset.abilityKey}.ordem`] = (index + 1) * 1000;
    });

    if (Object.keys(updateData).length) await sheet.actor.update(updateData);
    sheet.render(false);
  });
}

function registrarMenuContextoInventario(sheet, html) {
  const fecharMenu = () => document.querySelector(".jk-inventory-context-menu")?.remove();

  html.find(".jk-inventory-row").on("contextmenu", event => {
    event.preventDefault();
    event.stopPropagation();
    fecharMenu();

    const item = obterItemDoEvento(sheet.actor, event.currentTarget);
    if (!item) return;

    const menu = document.createElement("div");
    menu.className = "jk-inventory-context-menu";
    menu.style.left = `${Math.min(event.originalEvent.clientX, window.innerWidth - 170)}px`;
    menu.style.top = `${Math.min(event.originalEvent.clientY, window.innerHeight - 130)}px`;
    menu.innerHTML = `
      <button type="button" data-action="duplicate"><i class="fas fa-copy"></i> Duplicar</button>
      <button type="button" data-action="chat"><i class="fas fa-comment"></i> Enviar ao chat</button>
      <button type="button" data-action="delete" class="is-danger"><i class="fas fa-trash"></i> Excluir</button>
    `;

    menu.addEventListener("click", async menuEvent => {
      const action = menuEvent.target.closest("button")?.dataset?.action;
      if (!action) return;
      fecharMenu();

      if (action === "duplicate") await duplicarItemDoAtor(sheet.actor, item);
      if (action === "chat") await enviarItemParaChat(sheet.actor, item);
      if (action === "delete") {
        await sheet.actor.deleteEmbeddedDocuments("Item", [item.id]);
        await atualizarDefesaEquipamentos(sheet.actor);
      }

      if (["duplicate", "delete"].includes(action)) sheet.render(true);
    });

    document.body.appendChild(menu);
    setTimeout(() => document.addEventListener("click", fecharMenu, { once: true }), 0);
  });
}

async function duplicarItemDoAtor(actor, item) {
  const data = item.toObject();
  delete data._id;
  data.name = `${item.name} (Cópia)`;
  data.sort = Number(item.sort ?? 0) + 1;
  await actor.createEmbeddedDocuments("Item", [data]);
}

async function enviarItemParaChat(actor, item) {
  const descricao = item.system?.descricao?.trim?.() || "Sem descrição.";
  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor: item.type,
    content: `<div class="jk-item-chat-card"><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(descricao).replace(/\n/g, "<br>")}</p></div>`
  });
}

function criarItemPadrao(prefixo) {
  if (prefixo === "habilidade") {
    return { nome: "", ordem: 0, atual: 0, max: 0, custo: "", descricao: "" };
  }
  if (prefixo === "ataque") {
    return { nome: "", bonus: 0, dano: "", tipo: "" };
  }
  return { nome: "", quantidade: 1, peso: "", cargas: "", notas: "" };
}

async function consumirMunicaoOuRecurso(actor, itemId) {
  const item = actor.items.get(itemId);
  if (!item || obterCategoriaItem(item) !== "arma") return;

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
}

async function atualizarDefesaEquipamentos(actor) {
  const total = calcularDefesaEquipamentos(actor.items);
  await actor.update({ "system.combate.defesa.equipamentos": total });
}

function calcularDefesaEquipamentos(items) {
  let total = 0;

  for (const item of items ?? []) {
    if (obterCategoriaItem(item) !== "equipamento") continue;
    if (!item.system?.equipado) continue;

    total += Number(item.system?.equipamento?.defesa) || 0;
  }

  return total;
}

function equipamentoEhVestimento(item) {
  const tipoUso = item.system?.equipamento?.tipoUso;
  const tipo = item.system?.equipamento?.tipo;
  return tipoUso === "vestido" || tipo === "uniforme";
}

function obterCategoriaItem(item) {
  return ["arma", "equipamento", "consumivel", "tesouro"].includes(item.type)
    ? item.type
    : item.system?.categoria;
}

async function enviarHabilidadeParaChat(actor, key) {
  const habilidade = foundry.utils.getProperty(actor.system, `combate.habilidades.${key}`);
  if (!habilidade) return;

  const nome = habilidade.nome?.trim() || "Habilidade";
  const descricao = habilidade.descricao?.trim() || "Sem descrição.";
  const descricaoProcessada = await processarInlineRolls(descricao, actor, deveExibirBotaoCura(descricao));

  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor: "Habilidade & Talento",
    content: `
      <details class="jk-ability-chat-details" open>
        <summary>${escapeHtml(nome)}</summary>
        <div>${descricaoProcessada}</div>
      </details>
    `
  });
}

async function processarInlineRolls(texto, actor, exibirBotaoCura = false) {
  const partes = [];
  const regex = /\[\[([^\]]+)\]\]/g;
  let ultimoIndice = 0;
  let match;

  while ((match = regex.exec(texto)) !== null) {
    partes.push(escapeHtml(texto.slice(ultimoIndice, match.index)));

    const formula = match[1].trim();
    partes.push(await renderizarInlineRoll(formula, actor, exibirBotaoCura));

    ultimoIndice = regex.lastIndex;
  }

  partes.push(escapeHtml(texto.slice(ultimoIndice)));

  return partes.join("").replace(/\n/g, "<br>");
}

async function renderizarInlineRoll(formula, actor, exibirBotaoCura = false) {
  try {
    const rollData = typeof actor.getRollData === "function" ? actor.getRollData() : actor.system;
    const roll = await new Roll(formula, rollData).evaluate();
    const dados = obterResultadosDados(roll);
    const tooltip = `${escapeHtml(formula)}${dados ? `: ${escapeHtml(dados)}` : ""}`;

    const healingButton = exibirBotaoCura
      ? ` <button type="button" class="jk-apply-healing" data-healing="${Number(roll.total) || 0}">Aplicar Cura</button>`
      : "";

    return `<span class="inline-roll" title="${tooltip}">${roll.total}</span>${healingButton}`;
  } catch (error) {
    console.warn("Jiujitsu Kaisen | Falha ao processar rolagem inline:", formula, error);
    return `<span title="Fórmula inválida">[[${escapeHtml(formula)}]]</span>`;
  }
}

function deveExibirBotaoCura(texto) {
  return /\b(curar|cura|cure|curativo|curativa|curativas|vida|pv)\b/i.test(String(texto ?? ""));
}

function obterResultadosDados(roll) {
  return roll.dice
    ?.flatMap(die => die.results?.map(result => result.result) ?? [])
    .filter(result => result !== undefined && result !== null)
    .join(" + ") ?? "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


