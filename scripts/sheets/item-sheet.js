import {
  ALCANCES,
  ATRIBUTOS,
  CONSUMIVEIS_ARMA,
  DURACOES,
  EMPUNHADURAS_ARMA,
  ENCANTOS_ARMA,
  ENCANTOS_ESCUDO,
  ENCANTOS_UNIFORME,
  EXECUCOES,
  PROFICIENCIAS_ARMA,
  PROPOSITOS_ARMA,
  TIPOS_CONSUMIVEL,
  TIPOS_DANO,
  TIPOS_EQUIPAMENTO,
  TIPOS_USO_EQUIPAMENTO,
  prepararSlotsEncantos
} from "../items/item-config.js";

const ITEM_TYPE_LABELS = {
  arma: "Arma",
  consumivel: "Consumível",
  equipamento: "Equipamento",
  tesouro: "Tesouro",
  item: "Item"
};

function getItemTypeLabel(type) {
  return ITEM_TYPE_LABELS[type] ?? type ?? "Item";
}

export class JKItemSheet extends ItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["jk-item-sheet", "sheet", "item"],
      template: "systems/jiujitsu-kaisen/templates/items/item-sheet.hbs",
      width: 620,
      height: 620,
      tabs: [
        {
          navSelector: ".item-tabs",
          contentSelector: ".item-body",
          initial: "descricao"
        }
      ]
    });
  }

  getData() {
    const context = super.getData();
    const system = this.item.system ?? {};
    const tipo = this.item.type === "item" ? system?.categoria || "item" : this.item.type;
    const tipoEquipamento = system?.equipamento?.tipo ?? "";

    context.system = system;
    context.itemType = tipo;
    context.itemTypeLabel = getItemTypeLabel(tipo);

    context.isArma = tipo === "arma";
    context.isConsumivel = tipo === "consumivel";
    context.isEquipamento = tipo === "equipamento";
    context.isTesouro = tipo === "tesouro";

    context.showDetalhes = ["arma", "consumivel", "equipamento"].includes(tipo);
    context.showAprimoramentos = ["arma", "equipamento"].includes(tipo);

    context.atributos = ATRIBUTOS;
    context.tiposDano = TIPOS_DANO;
    context.alcances = ALCANCES;

    context.proficienciasArma = PROFICIENCIAS_ARMA;
    context.propositosArma = PROPOSITOS_ARMA;
    context.empunhadurasArma = EMPUNHADURAS_ARMA;
    context.consumiveisArma = CONSUMIVEIS_ARMA;
    context.tiposConsumivel = TIPOS_CONSUMIVEL;
    context.execucoes = EXECUCOES;
    context.duracoes = DURACOES;
    context.tiposEquipamento = TIPOS_EQUIPAMENTO;
    context.tiposUsoEquipamento = TIPOS_USO_EQUIPAMENTO;

    context.weaponDamages = prepararColecaoComFallback(
      system?.arma?.danos,
      "dano",
      system?.arma?.dano ? { dano1: system.arma.dano } : { dano1: criarDanoPadrao() }
    );

    context.weaponCritical = {
      margem: numeroInteiroOuPadrao(system?.arma?.critico?.margem, 20),
      multiplicador: numeroInteiroOuPadrao(system?.arma?.critico?.multiplicador, 2)
    };

    context.consumableAttacks = prepararColecaoComFallback(
      system?.consumivel?.rolagens?.ataques,
      "ataque",
      {}
    );

    context.consumableDamages = prepararColecaoComFallback(
      system?.consumivel?.rolagens?.danos,
      "dano",
      {}
    );

    context.consumableResistance = prepararResistenciaConsumivel(system);

    context.encantosArmaSlots = prepararSlotsEncantos(
      system?.arma?.aprimoramentos?.encantos ?? {},
      ENCANTOS_ARMA,
      4
    );

    context.encantosEquipamentoSlots = prepararSlotsEncantos(
      system?.equipamento?.aprimoramentos?.encantos ?? {},
      tipoEquipamento === "escudo" ? ENCANTOS_ESCUDO : ENCANTOS_UNIFORME,
      tipoEquipamento === "escudo" ? 3 : 4
    );

    context.hasTipoEquipamento = ["escudo", "uniforme"].includes(tipoEquipamento);

    return context;
  }

  async _updateObject(_event, formData) {
    // Salva sem rerender completo e sincroniza imediatamente a linha do item
    // na ficha do Actor, evitando depender de outra ação para atualizar a tabela.
    const result = await this.item.update(formData, { render: false });
    this._syncParentActorInventoryRow();
    return result;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // Troca de tipo de Equipamento sem rerender completo.
    // Atualiza apenas a área de Encantos para Escudo/Uniforme.
    html.find('select[name="system.equipamento.tipo"]').on("change", async event => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const tipo = event.currentTarget.value ?? "";
      await this.item.update({ "system.equipamento.tipo": tipo }, { render: false });
      this._refreshEquipmentEnchantments(html, tipo);
      this._syncParentActorInventoryRow();
    });

    // Propriedades de arma são persistidas sem rerenderizar a Item Sheet.
    // Isso mantém a aba/posição de rolagem atuais ao marcar ou desmarcar uma propriedade.
    html.find('.jk-weapon-properties input[type="checkbox"]').on("change", async event => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const input = event.currentTarget;
      const path = input.name;
      if (!path?.startsWith("system.arma.propriedades.")) return;

      await this.item.update({ [path]: Boolean(input.checked) }, { render: false });
    });

    html.find(".jk-item-add-damage").on("click", event => this._addWeaponDamageRow(event, html));
    html.find(".jk-item-remove-damage").on("click", event => this._removeWeaponDamageRow(event));

    html.find(".jk-consumable-add-attack").on("click", event => this._addConsumableRow(event, html, {
      path: "system.consumivel.rolagens.ataques",
      prefix: "ataque",
      factory: criarAtaqueConsumivelPadrao,
      templateSelector: ".jk-consumable-attack-template",
      listSelector: ".jk-consumable-attack-list",
      removeSelector: ".jk-consumable-remove-attack"
    }));
    html.find(".jk-consumable-remove-attack").on("click", event => this._removeConsumableRow(event, "system.consumivel.rolagens.ataques"));

    html.find(".jk-consumable-add-damage").on("click", event => this._addConsumableRow(event, html, {
      path: "system.consumivel.rolagens.danos",
      prefix: "dano",
      factory: criarDanoPadrao,
      templateSelector: ".jk-consumable-damage-template",
      listSelector: ".jk-consumable-damage-list",
      removeSelector: ".jk-consumable-remove-damage"
    }));
    html.find(".jk-consumable-remove-damage").on("click", event => this._removeConsumableRow(event, "system.consumivel.rolagens.danos"));
  }

  async _addWeaponDamageRow(event, html) {
    event.preventDefault();
    event.stopPropagation();

    const path = "system.arma.danos";
    const current = foundry.utils.getProperty(this.item, path) ?? {};
    const key = gerarProximaChave(current, "dano");
    const damage = criarDanoPadrao();

    await this.item.update({ [`${path}.${key}`]: damage }, { render: false });

    const list = html.find(".jk-weapon-damage-list")[0];
    const sourceRow = list?.querySelector(".jk-weapon-damage-row:last-child");
    if (!list || !sourceRow) return;

    const row = sourceRow.cloneNode(true);
    const oldKey = sourceRow.dataset.key;
    row.dataset.key = key;

    row.querySelectorAll("[name]").forEach(control => {
      control.name = control.name.replace(`.${oldKey}.`, `.${key}.`);
      if (control.tagName === "SELECT") control.selectedIndex = 0;
      else if (control.type === "checkbox") control.checked = false;
      else control.value = "";
    });

    const remove = row.querySelector(".jk-item-remove-damage");
    if (remove) {
      remove.dataset.key = key;
      remove.addEventListener("click", e => this._removeWeaponDamageRow(e));
    }

    list.appendChild(row);
  }

  async _removeWeaponDamageRow(event) {
    event.preventDefault();
    event.stopPropagation();

    const key = event.currentTarget.dataset.key;
    if (!key) return;

    await this.item.update({ [`system.arma.danos.-=${key}`]: null }, { render: false });
    event.currentTarget.closest(".jk-weapon-damage-row")?.remove();
  }

  async _addConsumableRow(event, html, { path, prefix, factory, templateSelector, listSelector, removeSelector }) {
    event.preventDefault();
    event.stopPropagation();

    const current = foundry.utils.getProperty(this.item, path) ?? {};
    const key = gerarProximaChave(current, prefix);
    await this.item.update({ [`${path}.${key}`]: factory() }, { render: false });

    const template = html.find(templateSelector)[0];
    const list = html.find(listSelector)[0];
    if (!template || !list) return;

    const fragment = template.content.cloneNode(true);
    const row = fragment.firstElementChild;
    if (!row) return;

    row.dataset.key = key;
    row.querySelectorAll('[name]').forEach(control => {
      control.name = control.name.replaceAll('__KEY__', key);
    });

    const remove = row.querySelector(removeSelector);
    if (remove) {
      remove.dataset.key = key;
      remove.addEventListener('click', e => this._removeConsumableRow(e, path));
    }

    list.appendChild(fragment);
  }

  async _removeConsumableRow(event, path) {
    event.preventDefault();
    event.stopPropagation();

    const key = event.currentTarget.dataset.key;
    if (!key) return;

    await this.item.update({ [`${path}.-=${key}`]: null }, { render: false });
    event.currentTarget.closest('[data-key]')?.remove();
  }


  _syncParentActorInventoryRow() {
    const actor = this.item.parent;
    if (!actor || actor.documentName !== "Actor") return;

    const sheetElement = actor.sheet?.element;
    if (!sheetElement?.find) return;

    const row = sheetElement.find(`.jk-inventory-row[data-item-id="${this.item.id}"]`);
    if (!row.length) return;

    const system = this.item.system ?? {};
    const categoria = ["arma", "equipamento", "consumivel", "tesouro"].includes(this.item.type)
      ? this.item.type
      : system.categoria ?? "";

    const capitalizar = value => {
      const texto = String(value ?? "").trim();
      if (!texto) return "";
      return texto.charAt(0).toLocaleUpperCase("pt-BR") + texto.slice(1);
    };

    row.find(".jk-item-name")
      .text(this.item.name ?? "Item")
      .attr("title", this.item.name ?? "Item");

    if (categoria === "equipamento") {
      row.find('[data-item-field="tipo"]').text(capitalizar(system.equipamento?.tipo));
      row.find('[data-item-field="defesa"]').text(system.equipamento?.defesa ?? "");
      row.find('[data-item-field="quantidade"]').text(system.quantidade ?? "");
      row.find('[data-item-field="espacos"]').text(system.espacos ?? "");
    }
  }


  _refreshEquipmentEnchantments(html, tipoEquipamento) {
    const container = html.find(".jk-equipment-enchantments")[0];
    if (!container) return;

    const tipo = String(tipoEquipamento ?? "").toLowerCase();
    const isEscudo = tipo === "escudo";
    const isUniforme = tipo === "uniforme";

    if (!isEscudo && !isUniforme) {
      container.innerHTML = `
        <h3>Encantos</h3>
        <p>Selecione <strong>Escudo</strong> ou <strong>Uniforme</strong> para editar encantos.</p>
      `;
      return;
    }

    const opcoes = isEscudo ? ENCANTOS_ESCUDO : ENCANTOS_UNIFORME;
    const quantidade = isEscudo ? 3 : 4;
    const encantosAtuais = this.item.system?.equipamento?.aprimoramentos?.encantos ?? {};
    const slots = prepararSlotsEncantos(encantosAtuais, opcoes, quantidade);

    const escapeHtml = (value) => String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

    container.innerHTML = `
      <h3>Encantos</h3>
      ${slots.map(slot => `
        <div class="form-group">
          <label>${escapeHtml(slot.label)}</label>
          <select name="system.equipamento.aprimoramentos.encantos.${escapeHtml(slot.key)}">
            ${slot.options.map(option => `
              <option
                value="${escapeHtml(option.value)}"
                ${option.value === slot.value ? "selected" : ""}
                ${option.disabled ? "disabled" : ""}
              >${escapeHtml(option.label)}</option>
            `).join("")}
          </select>
        </div>
      `).join("")}
    `;

    // Os selects recém-criados precisam dos próprios listeners porque foram
    // inseridos após activateListeners(). Salva sem rerender e atualiza apenas
    // este bloco para refletir opções duplicadas/indisponíveis imediatamente.
    container
      .querySelectorAll('select[name^="system.equipamento.aprimoramentos.encantos."]')
      .forEach(select => {
        select.addEventListener("change", async event => {
          event.preventDefault();
          event.stopImmediatePropagation();

          await this.item.update(
            { [select.name]: select.value },
            { render: false }
          );

          this._refreshEquipmentEnchantments(html, tipo);
        });
      });
  }
}

function prepararColecaoComFallback(collection, prefix, fallback = {}) {
  const source = collection && typeof collection === "object" && !Array.isArray(collection)
    ? collection
    : fallback;

  return Object.entries(source ?? {})
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, value]) => ({
      key,
      ...value
    }))
    .sort((a, b) => obterIndice(a.key, prefix) - obterIndice(b.key, prefix));
}

function prepararResistenciaConsumivel(system) {
  const resistencia = system?.consumivel?.rolagens?.resistencia ?? {};
  const atributo = resistencia.atributo ?? "";
  const bonus = Number(resistencia.bonus) || 0;

  return {
    teste: resistencia.teste ?? system?.consumivel?.ativacao?.testeResistencia ?? "",
    atributo,
    bonus,
    total: 10 + bonus
  };
}

function gerarProximaChave(collection, prefix) {
  const indices = Object.keys(collection ?? {})
    .map(key => obterIndice(key, prefix))
    .filter(Number.isFinite);

  return `${prefix}${indices.length ? Math.max(...indices) + 1 : 1}`;
}

function obterIndice(key, prefix) {
  const indice = Number(String(key).replace(prefix, ""));
  return Number.isFinite(indice) ? indice : 0;
}

function numeroInteiroOuPadrao(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.trunc(number) : fallback;
}

function criarDanoPadrao() {
  return { formula: "", atributo: "", tipo: "" };
}

function criarAtaqueConsumivelPadrao() {
  return { atributo: "", bonus: "" };
}


