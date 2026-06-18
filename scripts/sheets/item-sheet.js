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
  ITEM_CATEGORIAS,
  PROFICIENCIAS_ARMA,
  PROPOSITOS_ARMA,
  TIPOS_ATAQUE,
  TIPOS_CONSUMIVEL,
  TIPOS_DANO,
  TIPOS_EQUIPAMENTO,
  TIPOS_USO_EQUIPAMENTO,
  prepararSlotsEncantos
} from "../items/item-config.js";

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
    const system = this.item.system;
    const categoria = system?.categoria ?? "";
    const tipoEquipamento = system?.equipamento?.tipo ?? "";

    context.system = system;
    context.categorias = ITEM_CATEGORIAS;

    context.isArma = categoria === "arma";
    context.isConsumivel = categoria === "consumivel";
    context.isEquipamento = categoria === "equipamento";
    context.isTesouro = categoria === "tesouro";

    context.showDetalhes = ["arma", "consumivel", "equipamento"].includes(categoria);
    context.showAprimoramentos = ["arma", "equipamento"].includes(categoria);

    context.atributos = ATRIBUTOS;
    context.tiposDano = TIPOS_DANO;
    context.alcances = ALCANCES;
    context.tiposAtaque = TIPOS_ATAQUE;

    context.proficienciasArma = PROFICIENCIAS_ARMA;
    context.propositosArma = PROPOSITOS_ARMA;
    context.empunhadurasArma = EMPUNHADURAS_ARMA;
    context.consumiveisArma = CONSUMIVEIS_ARMA;
    context.tiposConsumivel = TIPOS_CONSUMIVEL;
    context.execucoes = EXECUCOES;
    context.duracoes = DURACOES;
    context.tiposEquipamento = TIPOS_EQUIPAMENTO;
    context.tiposUsoEquipamento = TIPOS_USO_EQUIPAMENTO;

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

    html.find('select[name="system.categoria"], select[name="system.equipamento.tipo"]').on("change", async event => {
      await this._onSubmit(event, { preventClose: true });
      this.render(false);
    });
  }
}

