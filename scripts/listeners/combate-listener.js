// combate-listener.js — versão correta para Foundry 13

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

  html.find(".jk-add-combat-row").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const { path, prefix } = event.currentTarget.dataset;
    if (!path || !prefix) return;

    const current = foundry.utils.getProperty(sheet.actor.system, path);
    const limpa = filtrarColecao(current, prefix);
    const key = gerarProximaChave(limpa, prefix);

    // No add: escreve APENAS a nova chave — não toca no resto
    await sheet.actor.update({
      [`system.${path}.${key}`]: criarItemPadrao(prefix)
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

    // Monta o update de remoção com -=chave para cada chave a remover
    // Remove o item solicitado
    const updateData = {
      [`system.${path}.-=${key}`]: null
    };

    // Se é o último item, remove também quaisquer chaves de lixo do schema
    // que possam estar no objeto (ex: "equipamentos" dentro de equipamentos)
    const outrasChaves = Object.keys(limpa).filter(k => k !== key);
    if (outrasChaves.length === 0) {
      // Remove chaves de lixo do schema explicitamente
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
  html.find(".jk-open-actor-item").on("click", event => {
    event.preventDefault();
    event.stopPropagation();

    const itemId = event.currentTarget.dataset.itemId;
    if (!itemId) return;

    const item = sheet.actor.items.get(itemId);
    item?.sheet?.render(true);
  });

  html.find(".jk-delete-actor-item").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const itemId = event.currentTarget.dataset.itemId;
    if (!itemId) return;

    await sheet.actor.deleteEmbeddedDocuments("Item", [itemId]);
    sheet.render(true);
  });

}


function criarItemPadrao(prefixo) {
  if (prefixo === "habilidade") {
    return { nome: "", atual: 0, max: 0, custo: "", descricao: "" };
  }
  if (prefixo === "ataque") {
    return { nome: "", bonus: 0, dano: "", tipo: "" };
  }
  return { nome: "", quantidade: 1, peso: "", cargas: "", notas: "" };
}


async function enviarHabilidadeParaChat(actor, key) {
  const habilidade = foundry.utils.getProperty(actor.system, `combate.habilidades.${key}`);
  if (!habilidade) return;

  const nome = habilidade.nome?.trim() || "Habilidade";
  const descricao = habilidade.descricao?.trim() || "Sem descrição.";
  const descricaoProcessada = await processarInlineRolls(descricao, actor);

  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor: "Habilidade & Talento",
    content: `
      <div class="jk-ability-chat-card">
        <div class="jk-ability-chat-title">${escapeHtml(nome)}</div>
        <div class="jk-ability-chat-description">${descricaoProcessada}</div>
      </div>
    `
  });
}

async function processarInlineRolls(texto, actor) {
  const partes = [];
  const regex = /\[\[([^\]]+)\]\]/g;
  let ultimoIndice = 0;
  let match;

  while ((match = regex.exec(texto)) !== null) {
    partes.push(escapeHtml(texto.slice(ultimoIndice, match.index)));

    const formula = match[1].trim();
    partes.push(await renderizarInlineRoll(formula, actor));

    ultimoIndice = regex.lastIndex;
  }

  partes.push(escapeHtml(texto.slice(ultimoIndice)));

  return partes.join("").replace(/\n/g, "<br>");
}

async function renderizarInlineRoll(formula, actor) {
  try {
    const rollData = typeof actor.getRollData === "function" ? actor.getRollData() : actor.system;
    const roll = await new Roll(formula, rollData).evaluate();
    const dados = obterResultadosDados(roll);
    const tooltip = `${escapeHtml(formula)}${dados ? `: ${escapeHtml(dados)}` : ""}`;

    return `<span class="jk-inline-roll-result" title="${tooltip}">${roll.total}</span>`;
  } catch (error) {
    console.warn("Jiujitsu Kaisen | Falha ao processar rolagem inline:", formula, error);
    return `<span class="jk-inline-roll-error" title="Fórmula inválida">[[${escapeHtml(formula)}]]</span>`;
  }
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


