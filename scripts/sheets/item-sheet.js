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

  activateListeners(html) {
    super.activateListeners(html);

    html.find('select[name="system.equipamento.tipo"]').on("change", async event => {
      await this._onSubmit(event, { preventClose: true });
      this.render(false);
    });

    html.find(".jk-item-add-damage").on("click", event => this._addCollectionRow(event, "system.arma.danos", "dano", criarDanoPadrao));
    html.find(".jk-item-remove-damage").on("click", event => this._removeCollectionRow(event, "system.arma.danos"));

    html.find(".jk-consumable-add-attack").on("click", event => this._addCollectionRow(event, "system.consumivel.rolagens.ataques", "ataque", criarAtaqueConsumivelPadrao));
    html.find(".jk-consumable-remove-attack").on("click", event => this._removeCollectionRow(event, "system.consumivel.rolagens.ataques"));

    html.find(".jk-consumable-add-damage").on("click", event => this._addCollectionRow(event, "system.consumivel.rolagens.danos", "dano", criarDanoPadrao));
    html.find(".jk-consumable-remove-damage").on("click", event => this._removeCollectionRow(event, "system.consumivel.rolagens.danos"));
  }

  async _addCollectionRow(event, path, prefix, factory) {
    event.preventDefault();
    event.stopPropagation();

    await this._onSubmit(event, { preventClose: true });

    const current = foundry.utils.getProperty(this.item, path) ?? {};
    const key = gerarProximaChave(current, prefix);

    await this.item.update({
      [`${path}.${key}`]: factory()
    });

    this.render(false);
  }

  async _removeCollectionRow(event, path) {
    event.preventDefault();
    event.stopPropagation();

    const key = event.currentTarget.dataset.key;
    if (!key) return;

    await this._onSubmit(event, { preventClose: true });
    await this.item.update({ [`${path}.-=${key}`]: null });
    this.render(false);
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

function criarDanoPadrao() {
  return { formula: "", atributo: "", tipo: "" };
}

function criarAtaqueConsumivelPadrao() {
  return { atributo: "", bonus: "" };
}

