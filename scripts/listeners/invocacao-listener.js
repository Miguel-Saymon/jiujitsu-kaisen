export function registerInvocacaoListener(sheet, html) {
  const actor = sheet.actor;

  migrarAcoesLegadas(actor).then(migrou => {
    if (migrou) sheet.render(false);
  });

  const preservarAba = () => {
    sheet._jkInvocacaoReturnTab = sheet._tabs?.[0]?.active ?? "principal";
  };

  const atualizarHabilidades = async lista => {
    preservarAba();
    await actor.update({ "system.habilidadesLista": lista });
  };

  html.find(".jk-invocacao-add-acao").on("click", async event => {
    event.preventDefault();

    const tipo = await escolherTipoAcao();
    if (!tipo) return;

    if (tipo === "ataque") {
      preservarAba();

      const [item] = await actor.createEmbeddedDocuments("Item", [{
        name: "Novo Ataque",
        type: "arma"
      }]);

      item?.sheet?.render(true);
      return;
    }

    const habilidade = await editarHabilidade({
      nome: "",
      execucao: "",
      descricao: ""
    });

    if (!habilidade) return;

    const lista = normalizarColecao(actor.system.habilidadesLista);
    const ordens = lista.map(item => Number(item?.ordem)).filter(Number.isFinite);

    lista.push({
      id: foundry.utils.randomID(),
      ordem: ordens.length ? Math.max(...ordens) + 1000 : 1000,
      ...habilidade
    });

    await atualizarHabilidades(lista);
  });

  html.find(".jk-invocacao-edit-ataque, .jk-invocacao-attack-name").on("click", event => {
    event.preventDefault();
    event.stopPropagation();

    const itemId = String(event.currentTarget.dataset.itemId ?? "");
    actor.items.get(itemId)?.sheet?.render(true);
  });

  html.find(".jk-invocacao-remove-ataque").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const itemId = String(event.currentTarget.dataset.itemId ?? "");
    if (!itemId) return;

    preservarAba();
    await actor.deleteEmbeddedDocuments("Item", [itemId]);
  });

  html.find(".jk-invocacao-edit-habilidade, .jk-invocacao-hability-name").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const id = String(event.currentTarget.dataset.id ?? "");
    const lista = normalizarColecao(actor.system.habilidadesLista);
    const item = lista.find(habilidade => habilidade.id === id);
    if (!item) return;

    const editada = await editarHabilidade(item);
    if (!editada) return;

    Object.assign(item, editada);
    await atualizarHabilidades(lista);
  });

  html.find(".jk-invocacao-remove-habilidade").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const id = String(event.currentTarget.dataset.id ?? "");
    const lista = normalizarColecao(actor.system.habilidadesLista)
      .filter(habilidade => habilidade.id !== id);

    await atualizarHabilidades(lista);
  });

  registrarOrdenacaoAtaques(sheet, html);
  registrarOrdenacaoHabilidades(sheet, html);
}

async function escolherTipoAcao() {
  return Dialog.prompt({
    title: "Nova Ação",
    content: `
      <form class="jk-invocacao-action-dialog">
        <div class="form-group">
          <label>Tipo de Ação</label>
          <select name="tipo">
            <option value="">Selecione...</option>
            <option value="ataque">Ataque</option>
            <option value="habilidade">Habilidade</option>
          </select>
        </div>
      </form>
    `,
    label: "Continuar",
    callback: dialogHtml => {
      const tipo = String(dialogHtml.find('[name="tipo"]').val() ?? "");
      if (!["ataque", "habilidade"].includes(tipo)) {
        ui.notifications.warn("Escolha Ataque ou Habilidade.");
        return false;
      }

      return tipo;
    },
    rejectClose: false
  });
}

async function editarHabilidade(item) {
  return Dialog.prompt({
    title: item?.id ? "Editar Habilidade" : "Nova Habilidade",
    content: `
      <form class="jk-invocacao-action-dialog">
        <div class="form-group">
          <label>Nome</label>
          <input name="nome" type="text" value="${escapeHtml(item?.nome ?? "")}" />
        </div>

        <div class="form-group">
          <label>Execução</label>
          <input name="execucao" type="text" value="${escapeHtml(item?.execucao ?? "")}" />
        </div>

        <div class="form-group">
          <label>Descrição</label>
          <textarea name="descricao" rows="8">${escapeHtml(item?.descricao ?? "")}</textarea>
        </div>
      </form>
    `,
    label: "Salvar",
    callback: dialogHtml => ({
      nome: String(dialogHtml.find('[name="nome"]').val() ?? "").trim() || "Nova Habilidade",
      execucao: String(dialogHtml.find('[name="execucao"]').val() ?? "").trim(),
      descricao: String(dialogHtml.find('[name="descricao"]').val() ?? "").trim()
    }),
    rejectClose: false
  });
}

function registrarOrdenacaoAtaques(sheet, html) {
  let draggedRow = null;

  html.find(".jk-invocacao-drag-ataque[draggable='true']").on("dragstart", event => {
    draggedRow = event.currentTarget.closest(".jk-invocacao-attack-row");
    if (!draggedRow) return;

    draggedRow.classList.add("is-dragging");
    event.originalEvent.dataTransfer.effectAllowed = "move";
    event.originalEvent.dataTransfer.setData("text/plain", draggedRow.dataset.itemId ?? "");
  });

  html.find(".jk-invocacao-drag-ataque[draggable='true']").on("dragend", () => {
    draggedRow?.classList.remove("is-dragging");
    html.find(".jk-invocacao-attack-row").removeClass("is-drop-target");
    draggedRow = null;
  });

  html.find(".jk-invocacao-attack-row").on("dragover", event => {
    event.preventDefault();
    if (!draggedRow || draggedRow === event.currentTarget) return;

    html.find(".jk-invocacao-attack-row").removeClass("is-drop-target");
    event.currentTarget.classList.add("is-drop-target");
    event.originalEvent.dataTransfer.dropEffect = "move";
  });

  html.find(".jk-invocacao-attack-row").on("drop", async event => {
    event.preventDefault();

    const targetRow = event.currentTarget;
    if (!draggedRow || draggedRow === targetRow) return;

    const tbody = targetRow.closest(".jk-invocacao-action-list");
    const rect = targetRow.getBoundingClientRect();
    const inserirDepois = event.originalEvent.clientY > rect.top + rect.height / 2;

    targetRow.insertAdjacentElement(inserirDepois ? "afterend" : "beforebegin", draggedRow);

    const updates = [...tbody.querySelectorAll(".jk-invocacao-attack-row[data-item-id]")]
      .map((row, index) => ({
        _id: row.dataset.itemId,
        sort: (index + 1) * 1000
      }));

    if (updates.length) {
      await sheet.actor.updateEmbeddedDocuments("Item", updates);
      sheet._jkInvocacaoReturnTab = "principal";
      sheet.render(false);
    }
  });
}

function registrarOrdenacaoHabilidades(sheet, html) {
  let draggedRow = null;

  html.find(".jk-invocacao-drag-habilidade[draggable='true']").on("dragstart", event => {
    draggedRow = event.currentTarget.closest(".jk-invocacao-hability-row");
    if (!draggedRow) return;

    draggedRow.classList.add("is-dragging");
    event.originalEvent.dataTransfer.effectAllowed = "move";
    event.originalEvent.dataTransfer.setData("text/plain", draggedRow.dataset.id ?? "");
  });

  html.find(".jk-invocacao-drag-habilidade[draggable='true']").on("dragend", () => {
    draggedRow?.classList.remove("is-dragging");
    html.find(".jk-invocacao-hability-row").removeClass("is-drop-target");
    draggedRow = null;
  });

  html.find(".jk-invocacao-hability-row").on("dragover", event => {
    event.preventDefault();
    if (!draggedRow || draggedRow === event.currentTarget) return;

    html.find(".jk-invocacao-hability-row").removeClass("is-drop-target");
    event.currentTarget.classList.add("is-drop-target");
    event.originalEvent.dataTransfer.dropEffect = "move";
  });

  html.find(".jk-invocacao-hability-row").on("drop", async event => {
    event.preventDefault();

    const targetRow = event.currentTarget;
    if (!draggedRow || draggedRow === targetRow) return;

    const container = targetRow.closest(".jk-invocacao-action-list");
    const rect = targetRow.getBoundingClientRect();
    const inserirDepois = event.originalEvent.clientY > rect.top + rect.height / 2;

    targetRow.insertAdjacentElement(inserirDepois ? "afterend" : "beforebegin", draggedRow);

    const ids = [...container.querySelectorAll(".jk-invocacao-hability-row[data-id]")]
      .map(row => row.dataset.id);

    const atual = normalizarColecao(sheet.actor.system.habilidadesLista);
    const porId = new Map(atual.map(item => [item.id, item]));

    const reordenada = ids
      .map((id, index) => {
        const item = porId.get(id);
        return item ? { ...item, ordem: (index + 1) * 1000 } : null;
      })
      .filter(Boolean);

    sheet._jkInvocacaoReturnTab = "principal";
    await sheet.actor.update({ "system.habilidadesLista": reordenada });
  });
}

async function migrarAcoesLegadas(actor) {
  const legadas = normalizarColecao(actor.system.acoesLista);
  if (!legadas.length) return false;

  const ataques = legadas.filter(item => item?.tipo === "ataque");
  const habilidadesLegadas = legadas.filter(item => item?.tipo === "habilidade");
  const updates = {};

  if (ataques.length) {
    const documentos = ataques.map(item => ({
      name: String(item?.nome ?? "").trim() || "Ataque",
      type: "arma",
      system: {
        descricao: String(item?.descricao ?? "")
      }
    }));

    await actor.createEmbeddedDocuments("Item", documentos);
  }

  if (habilidadesLegadas.length) {
    const atuais = normalizarColecao(actor.system.habilidadesLista);
    const idsExistentes = new Set(atuais.map(item => item.id));

    for (const item of habilidadesLegadas) {
      const id = item.id || foundry.utils.randomID();
      if (idsExistentes.has(id)) continue;

      atuais.push({
        id,
        ordem: (atuais.length + 1) * 1000,
        nome: String(item?.nome ?? "").trim() || "Habilidade",
        execucao: String(item?.execucao ?? ""),
        descricao: String(item?.descricao ?? "")
      });
    }

    updates["system.habilidadesLista"] = atuais;
  }

  updates["system.acoesLista"] = [];
  await actor.update(updates);
  return true;
}

function normalizarColecao(valor) {
  if (Array.isArray(valor)) return foundry.utils.deepClone(valor);
  if (valor && typeof valor === "object") return foundry.utils.deepClone(Object.values(valor));
  return [];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

