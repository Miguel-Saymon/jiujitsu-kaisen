export function registerTecnicasListener(sheet, html) {
  const actor = sheet.actor;

  const preservarTecnicas = () => {
    const body = html.find(".sheet-body")[0];
    sheet._jkTecnicasReturnTab = "tecnicas";
    sheet._jkTecnicasScrollTop = body?.scrollTop ?? 0;
  };

  const atualizarColecao = async (path, colecao) => {
    preservarTecnicas();
    await actor.update({ [path]: colecao });
  };

  html.find(".jk-tecnicas-atributo-select").on("change", async event => {
    event.preventDefault();
    preservarTecnicas();

    const permitidos = new Set([
      "",
      "forca",
      "destreza",
      "constituicao",
      "inteligencia",
      "sabedoria",
      "presenca"
    ]);
    const atributo = String(event.currentTarget.value ?? "");

    if (!permitidos.has(atributo)) return;

    await actor.update({
      "system.tecnicas.perfil.atributoPrincipal": atributo
    });
  });

  html.find(".jk-tecnicas-cd-outros").on("change", async event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    preservarTecnicas();

    const path = event.currentTarget.name;
    if (![
      "system.tecnicas.perfil.cdTecnicaOutros",
      "system.tecnicas.perfil.cdAmaldicoadaOutros"
    ].includes(path)) return;

    await actor.update({ [path]: Number(event.currentTarget.value) || 0 });
  });

  html.find('[name="system.tecnicas.especiais.expansao.tipo"]').on("change", async event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    preservarTecnicas();

    // O tipo da Expansão participa de requisitos automáticos de Treinamentos.
    // Salvar explicitamente e renderizar garante que os alertas sejam
    // reavaliados tanto ao cumprir quanto ao deixar de cumprir o requisito.
    await actor.update({
      "system.tecnicas.especiais.expansao.tipo": String(event.currentTarget.value ?? "")
    });
  });

  html.find(".jk-add-aptidao").on("click", async event => {
    event.preventDefault();
    const lista = foundry.utils.deepClone(actor.system.tecnicas?.aptidoesLista ?? []);
    lista.push({
      id: foundry.utils.randomID(),
      nome: "Nova Aptidão",
      atual: 0,
      max: 0,
      custo: "",
      descricao: ""
    });
    await atualizarColecao("system.tecnicas.aptidoesLista", lista);
  });

  html.find(".jk-edit-aptidao").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const id = event.currentTarget.dataset.id;
    const lista = foundry.utils.deepClone(actor.system.tecnicas?.aptidoesLista ?? []);
    const item = lista.find(entry => entry.id === id);
    if (!item) return;

    const editado = await editarAptidao(item);
    if (!editado) return;

    Object.assign(item, editado);
    await atualizarColecao("system.tecnicas.aptidoesLista", lista);
  });

  html.find(".jk-chat-aptidao").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const id = event.currentTarget.dataset.id;
    const item = (actor.system.tecnicas?.aptidoesLista ?? []).find(entry => entry.id === id);
    if (item) await enviarAptidaoParaChat(actor, item);
  });

  html.find(".jk-remove-aptidao").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const id = event.currentTarget.dataset.id;
    const lista = foundry.utils.deepClone(actor.system.tecnicas?.aptidoesLista ?? [])
      .filter(item => item.id !== id);
    await atualizarColecao("system.tecnicas.aptidoesLista", lista);
  });

  html.find(".jk-add-feitico").on("click", async event => {
    event.preventDefault();
    const lista = foundry.utils.deepClone(actor.system.tecnicas?.feiticosLista ?? []);
    lista.push({
      id: foundry.utils.randomID(),
      nome: "Novo Feitiço",
      nivel: 0,
      conjuracao: "",
      alcance: "",
      alvo: "",
      duracao: "",
      descricao: ""
    });
    await atualizarColecao("system.tecnicas.feiticosLista", lista);
  });

  html.find(".jk-edit-feitico").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const id = event.currentTarget.dataset.id;
    const lista = foundry.utils.deepClone(actor.system.tecnicas?.feiticosLista ?? []);
    const item = lista.find(entry => entry.id === id);
    if (!item) return;

    const editado = await editarFeitico(item);
    if (!editado) return;

    Object.assign(item, editado);
    await atualizarColecao("system.tecnicas.feiticosLista", lista);
  });

  html.find(".jk-chat-feitico").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const id = event.currentTarget.dataset.id;
    const item = (actor.system.tecnicas?.feiticosLista ?? []).find(entry => entry.id === id);
    if (item) await enviarFeiticoParaChat(actor, item);
  });

  html.find(".jk-remove-feitico").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    const id = event.currentTarget.dataset.id;
    const lista = foundry.utils.deepClone(actor.system.tecnicas?.feiticosLista ?? [])
      .filter(item => item.id !== id);
    await atualizarColecao("system.tecnicas.feiticosLista", lista);
  });
  let reorderData = null;

  html.find(".jk-reorder-handle").on("dragstart", event => {
    const target = event.currentTarget;
    reorderData = {
      id: String(target.dataset.id ?? ""),
      type: String(target.dataset.reorderType ?? "")
    };

    const nativeEvent = event.originalEvent ?? event;
    nativeEvent.dataTransfer?.setData("text/plain", JSON.stringify(reorderData));
    if (nativeEvent.dataTransfer) nativeEvent.dataTransfer.effectAllowed = "move";

    target.closest(".jk-reorder-row")?.classList.add("is-dragging");
  });

  html.find(".jk-reorder-handle").on("dragend", event => {
    event.currentTarget.closest(".jk-reorder-row")?.classList.remove("is-dragging");
    html.find(".jk-reorder-row").removeClass("is-drop-target");
    reorderData = null;
  });

  html.find(".jk-reorder-row").on("dragover", event => {
    if (!reorderData) return;
    if (String(event.currentTarget.dataset.reorderType ?? "") !== reorderData.type) return;

    event.preventDefault();
    const nativeEvent = event.originalEvent ?? event;
    if (nativeEvent.dataTransfer) nativeEvent.dataTransfer.dropEffect = "move";
    event.currentTarget.classList.add("is-drop-target");
  });

  html.find(".jk-reorder-row").on("dragleave", event => {
    event.currentTarget.classList.remove("is-drop-target");
  });

  html.find(".jk-reorder-row").on("drop", async event => {
    event.preventDefault();
    const targetRow = event.currentTarget;
    targetRow.classList.remove("is-drop-target");

    if (!reorderData) return;

    const type = String(targetRow.dataset.reorderType ?? "");
    const targetId = String(targetRow.dataset.id ?? "");
    if (!targetId || targetId === reorderData.id || type !== reorderData.type) return;

    if (type === "aptidao") {
      const lista = foundry.utils.deepClone(actor.system.tecnicas?.aptidoesLista ?? []);
      const sourceIndex = lista.findIndex(entry => entry.id === reorderData.id);
      const targetIndex = lista.findIndex(entry => entry.id === targetId);
      if (sourceIndex < 0 || targetIndex < 0) return;

      const [movido] = lista.splice(sourceIndex, 1);
      const novoTargetIndex = lista.findIndex(entry => entry.id === targetId);
      lista.splice(novoTargetIndex, 0, movido);
      await atualizarColecao("system.tecnicas.aptidoesLista", lista);
      return;
    }

    if (type === "feitico") {
      const lista = foundry.utils.deepClone(actor.system.tecnicas?.feiticosLista ?? []);
      const source = lista.find(entry => entry.id === reorderData.id);
      const target = lista.find(entry => entry.id === targetId);
      if (!source || !target) return;

      // Reorganização altera somente a ordem dentro do mesmo nível.
      if (Number(source.nivel) !== Number(target.nivel)) return;

      const sourceIndex = lista.findIndex(entry => entry.id === reorderData.id);
      lista.splice(sourceIndex, 1);
      const novoTargetIndex = lista.findIndex(entry => entry.id === targetId);
      lista.splice(novoTargetIndex, 0, source);
      await atualizarColecao("system.tecnicas.feiticosLista", lista);
    }
  });

}

async function editarAptidao(item) {
  return Dialog.prompt({
    title: "Editar Aptidão Amaldiçoada",
    content: `
      <form class="jk-tecnica-dialog-form">
        <div class="form-group">
          <label>Nome</label>
          <input name="nome" type="text" value="${escapeHtml(item.nome ?? "")}" />
        </div>
        <div class="jk-tecnica-dialog-grid">
          <div class="form-group">
            <label>Atual</label>
            <input name="atual" type="number" value="${Number(item.atual) || 0}" />
          </div>
          <div class="form-group">
            <label>Máx.</label>
            <input name="max" type="number" value="${Number(item.max) || 0}" />
          </div>
          <div class="form-group">
            <label>Custo</label>
            <input name="custo" type="text" value="${escapeHtml(item.custo ?? "")}" />
          </div>
        </div>
        <div class="form-group">
          <label>Descrição</label>
          <textarea name="descricao" rows="7">${escapeHtml(item.descricao ?? "")}</textarea>
        </div>
      </form>
    `,
    label: "Salvar",
    callback: dialogHtml => ({
      nome: String(dialogHtml.find('[name="nome"]').val() ?? "").trim() || "Aptidão",
      atual: Number(dialogHtml.find('[name="atual"]').val()) || 0,
      max: Number(dialogHtml.find('[name="max"]').val()) || 0,
      custo: String(dialogHtml.find('[name="custo"]').val() ?? "").trim(),
      descricao: String(dialogHtml.find('[name="descricao"]').val() ?? "").trim()
    }),
    rejectClose: false
  });
}

async function editarFeitico(item) {
  const nivelAtual = Math.max(0, Math.min(5, Number(item.nivel) || 0));
  const options = [0, 1, 2, 3, 4, 5]
    .map(nivel => `<option value="${nivel}" ${nivel === nivelAtual ? "selected" : ""}>Nível ${nivel}</option>`)
    .join("");

  return Dialog.prompt({
    title: "Editar Feitiço",
    content: `
      <form class="jk-tecnica-dialog-form">
        <div class="form-group">
          <label>Nome</label>
          <input name="nome" type="text" value="${escapeHtml(item.nome ?? "")}" />
        </div>
        <div class="jk-feitico-dialog-grid">
          <div class="form-group">
            <label>Nível</label>
            <select name="nivel">${options}</select>
          </div>
          <div class="form-group">
            <label>Conjuração</label>
            <input name="conjuracao" type="text" value="${escapeHtml(item.conjuracao ?? "")}" />
          </div>
          <div class="form-group">
            <label>Alcance</label>
            <input name="alcance" type="text" value="${escapeHtml(item.alcance ?? "")}" />
          </div>
          <div class="form-group">
            <label>Alvo</label>
            <input name="alvo" type="text" value="${escapeHtml(item.alvo ?? "")}" />
          </div>
          <div class="form-group">
            <label>Duração</label>
            <input name="duracao" type="text" value="${escapeHtml(item.duracao ?? "")}" />
          </div>
        </div>
        <div class="form-group">
          <label>Descrição</label>
          <textarea name="descricao" rows="7">${escapeHtml(item.descricao ?? "")}</textarea>
        </div>
      </form>
    `,
    label: "Salvar",
    callback: dialogHtml => ({
      nome: String(dialogHtml.find('[name="nome"]').val() ?? "").trim() || "Feitiço",
      nivel: Math.max(0, Math.min(5, Number(dialogHtml.find('[name="nivel"]').val()) || 0)),
      conjuracao: String(dialogHtml.find('[name="conjuracao"]').val() ?? "").trim(),
      alcance: String(dialogHtml.find('[name="alcance"]').val() ?? "").trim(),
      alvo: String(dialogHtml.find('[name="alvo"]').val() ?? "").trim(),
      duracao: String(dialogHtml.find('[name="duracao"]').val() ?? "").trim(),
      descricao: String(dialogHtml.find('[name="descricao"]').val() ?? "").trim()
    }),
    rejectClose: false
  });
}

async function enviarAptidaoParaChat(actor, item) {
  const nome = item.nome?.trim() || "Aptidão Amaldiçoada";
  const descricao = item.descricao?.trim() || "Sem descrição.";
  const detalhes = [
    `Atual: ${Number(item.atual) || 0}`,
    `Máx.: ${Number(item.max) || 0}`,
    item.custo ? `Custo: ${escapeHtml(item.custo)}` : null
  ].filter(Boolean).join(" · ");

  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor: "Aptidão Amaldiçoada",
    content: `
      <div class="jk-tecnica-chat-card">
        <h3>${escapeHtml(nome)}</h3>
        <div class="jk-tecnica-chat-meta">${detalhes}</div>
        <p>${formatarDescricao(descricao)}</p>
      </div>
    `
  });
}

async function enviarFeiticoParaChat(actor, item) {
  const nome = item.nome?.trim() || "Feitiço";
  const descricao = item.descricao?.trim() || "Sem descrição.";
  const nivel = Math.max(0, Math.min(5, Number(item.nivel) || 0));
  const custoPe = ({ 0: 0, 1: 2, 2: 5, 3: 8, 4: 12, 5: 20 })[nivel] ?? 0;

  const detalhes = [
    `Nível ${nivel}`,
    `${custoPe} PE`,
    item.conjuracao ? `Conjuração: ${escapeHtml(item.conjuracao)}` : null,
    item.alcance ? `Alcance: ${escapeHtml(item.alcance)}` : null,
    item.alvo ? `Alvo: ${escapeHtml(item.alvo)}` : null,
    item.duracao ? `Duração: ${escapeHtml(item.duracao)}` : null
  ].filter(Boolean).join(" · ");

  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor: `Feitiço — Nível ${nivel}`,
    content: `
      <div class="jk-tecnica-chat-card">
        <h3>${escapeHtml(nome)}</h3>
        <div class="jk-tecnica-chat-meta">${detalhes}</div>
        <p>${formatarDescricao(descricao)}</p>
      </div>
    `
  });
}

function formatarDescricao(texto) {
  return escapeHtml(texto).replace(/\n/g, "<br>");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

