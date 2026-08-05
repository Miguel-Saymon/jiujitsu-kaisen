import { calcularAtributos } from "../calculations/atributos.js";
import { calcularPericias } from "../calculations/pericias.js";
import { calcularCombate } from "../calculations/combate.js";
import { obterOpcoesEspecializacao, personagemEhRestringido } from "../helpers/especializacoes.js";
import { registerLevelListener } from "../listeners/level-listener.js";
import { ATRIBUTOS_LABELS } from "../constants/atributos.js";
import { calcularEstadoIntegridade } from "../calculations/integridade.js";
import { registerAttributeListener } from "../listeners/attribute-listener.js";
import { registerSkillRolls } from "../rolls/skill-rolls.js";
import { registerResistanceRolls } from "../rolls/resistance-rolls.js";
import { registerInitiativeRolls } from "../rolls/initiative-rolls.js";
import { registerDeathSaveRolls } from "../rolls/death-save-rolls.js";
import { registerDeathSaveListener } from "../listeners/death-save-listener.js";
import { registerCombatListener } from "../listeners/combate-listener.js";
import { calcularDadosVida } from "../calculations/recursos.js";
import { obterBonusTreino } from "../helpers/proficiencia.js";

export class JKCharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["jiujitsu-kaisen", "sheet", "actor"],
      template: "systems/jiujitsu-kaisen/templates/character-sheet.hbs",
      width: 1000,
      height: 650,
tabs: [
  {
    navSelector: ".sheet-tabs",
    contentSelector: ".sheet-body",
    initial: "principal"
  }
]
    });
  }

getData() {
  const context = super.getData();

  context.system = this.actor.system;

  calcularAtributos(context.system);
  calcularPericias(context.system);
  aplicarDefesaDeEquipamentos(context.system, this.actor.items);

  const carga = calcularCargaInventario(this.actor.items, context.system);
  calcularCombate(context.system, {
    penalidadeDefesa: carga.sobrecarregado ? -5 : 0
  });
  calcularDadosVida(context.system);

  context.periciasOrdenadas = Object.entries(context.system.pericias ?? {})
  .map(([key, pericia]) => ({
    key,
    ...pericia,
    nomeExibido: pericia.nome
  }))
  .sort((a, b) =>
    a.nomeExibido.localeCompare(b.nomeExibido, "pt-BR")
  );

  context.atributosPericia = ATRIBUTOS_LABELS;

  context.especializacoes = obterOpcoesEspecializacao();

  context.resumoEspecializacoes = gerarResumoEspecializacoes(
    context.system,
    context.especializacoes
  );

context.isRestringido = personagemEhRestringido(
  context.system
);

context.nomeRecursoEnergia = context.isRestringido
  ? "Pontos de Estamina"
  : "Pontos de Energia";

context.estadoIntegridade = calcularEstadoIntegridade(
  context.system
);

context.bonusTreino = obterBonusTreino(context.system);

context.combateHabilidades = prepararListaCombate(
  context.system.combate?.habilidades,
  "habilidade"
);

const itensCombate = prepararItensCombate(this.actor.items);

context.combateAtaques = itensCombate.ataques;
context.combateEquipamentos = itensCombate.equipamentos;
context.combateConsumiveis = itensCombate.consumiveis;
context.combateTesouros = itensCombate.tesouros;

context.cargaAtual = carga.atual;
context.cargaLimite = carga.limite;
context.cargaMaxima = carga.maxima;
context.cargaPercentual = carga.percentual;
context.cargaSobrecarregado = carga.sobrecarregado;
context.cargaImpossivel = carga.impossivel;

context.deslocamentoTotal =
  (Number(context.system.combate?.deslocamento) || 0) +
  (Number(context.system.combate?.deslocamentoOutros) || 0);

  return context;
}

activateListeners(html) {
  super.activateListeners(html);

    html.find(".jk-reset-profile-img").on("click", async event => {
    event.preventDefault();
    event.stopPropagation();

    await this.actor.update({
      img: "icons/svg/mystery-man.svg"
    });
  });

    html.find(".jk-profile-img").on("click", async event => {
    event.preventDefault();

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png,image/jpeg,image/webp,image/gif";

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const maxSizeMB = 2;
      const maxSizeBytes = maxSizeMB * 1024 * 1024;

      if (file.size > maxSizeBytes) {
        ui.notifications.warn(`A imagem precisa ter no máximo ${maxSizeMB}MB.`);
        return;
      }

      if (!file.type.startsWith("image/")) {
        ui.notifications.warn("Selecione apenas arquivos de imagem.");
        return;
      }

      const reader = new FileReader();

      reader.onload = async readerEvent => {
        const base64 = readerEvent.target.result;

        await this.actor.update({
          img: base64
        });
      };

      reader.readAsDataURL(file);
    };

    input.click();
  });

  const deathDrawer = html.find(".jk-death-drawer");

  if (this._jkDeathDrawerOpen) {
    deathDrawer.prop("open", true);
  }

  deathDrawer.on("toggle", event => {
    this._jkDeathDrawerOpen = event.currentTarget.open;
  });

  registerSkillRolls(this, html);
  registerResistanceRolls(this, html);
  registerInitiativeRolls(this, html);
  registerDeathSaveRolls(this, html);
  registerLevelListener(this, html);
  registerAttributeListener(this, html);
  registerDeathSaveListener(this, html);
  registerCombatListener(this, html);

  const atualizarDeslocamentoTotal = () => {
    const base = Number(html.find('[name="system.combate.deslocamento"]').val()) || 0;
    const outros = Number(html.find('[name="system.combate.deslocamentoOutros"]').val()) || 0;
    html.find('.jk-deslocamento-total').text(base + outros);
  };

  html.find('[name="system.combate.deslocamento"], [name="system.combate.deslocamentoOutros"]')
    .on('input', atualizarDeslocamentoTotal);
}

}

function gerarResumoEspecializacoes(system, especializacoes) {
  const niveis = system.progressao?.niveis ?? [];

  const contagem = {};

  const abreviacoes = {
    lutador: "Lut.",
    especialistaCombate: "Esp. Comb.",
    especialistaTecnica: "Esp. Téc.",
    controlador: "Ctrl.",
    suporte: "Sup.",
    restringido: "Restr."
  };

  for (const nivel of niveis) {
    contagem[nivel.especializacao] =
      (contagem[nivel.especializacao] ?? 0) + 1;
  }

  return Object.entries(contagem)
    .map(([chave, total]) => {
      const nome = abreviacoes[chave] ?? chave;
      return `${nome} ${total}`;
    })
    .join(" / ");
}


function capitalizarInicial(valor) {
  const texto = String(valor ?? "").trim();
  if (!texto) return "";
  return texto.charAt(0).toLocaleUpperCase("pt-BR") + texto.slice(1);
}

function aplicarDefesaDeEquipamentos(system, items) {
  const defesa = calcularDefesaEquipamentosAtivos(items);
  foundry.utils.setProperty(system, "combate.defesa.equipamentos", defesa);
}

function calcularDefesaEquipamentosAtivos(items) {
  let total = 0;

  for (const item of items ?? []) {
    const system = item.system ?? {};
    const categoria = ["arma", "equipamento", "consumivel", "tesouro"].includes(item.type) ? item.type : system.categoria ?? "";

    if (categoria !== "equipamento" || !system.equipado) continue;

    total += Number(system.equipamento?.defesa) || 0;
  }

  return total;
}

function prepararItensCombate(items) {
  const listas = {
    ataques: [],
    equipamentos: [],
    consumiveis: [],
    tesouros: []
  };

  for (const item of items ?? []) {
    const system = item.system ?? {};
    const categoria = ["arma", "equipamento", "consumivel", "tesouro"].includes(item.type) ? item.type : system.categoria ?? "";

    const base = {
      id: item.id,
      sort: Number(item.sort ?? 0),
      nome: item.name ?? "Item",
      img: item.img,
      categoria,
      equipado: Boolean(system.equipado),
      quantidade: system.quantidade ?? "",
      espacos: system.espacos ?? "",
      preco: system.preco ?? "",
      rd: system.rd ?? "",
      pvAtual: system.pv?.atual ?? "",
      pvMax: system.pv?.max ?? ""
    };

    if (categoria === "arma") {
      listas.ataques.push({
        ...base,
        bonus: system.arma?.ataque?.bonus ?? "",
        dano: obterResumoDanosArma(system.arma),
        tipo: obterResumoTiposDano(system.arma),
        municaoAtual: system.arma?.municaoAtual ?? "",
        alcance: system.arma?.alcance ?? "",
        critico: formatarCriticoArma(system.arma?.critico)
      });
      continue;
    }

    if (categoria === "equipamento") {
      listas.equipamentos.push({
        ...base,
        tipo: capitalizarInicial(system.equipamento?.tipo ?? ""),
        defesa: system.equipamento?.defesa ?? "",
        penalidadeArmadura: system.equipamento?.penalidadeArmadura ?? ""
      });
      continue;
    }

    if (categoria === "consumivel") {
      listas.consumiveis.push({
        ...base,
        tipo: capitalizarInicial(system.consumivel?.tipo ?? ""),
        execucao: system.consumivel?.ativacao?.execucao ?? "",
        duracao: system.consumivel?.ativacao?.duracao ?? ""
      });
      continue;
    }

    if (categoria === "tesouro") {
      listas.tesouros.push({
        ...base,
        recipiente: system.tesouro?.recipiente ?? false
      });
    }
  }

  for (const lista of Object.values(listas)) {
    lista.sort((a, b) => (a.sort - b.sort) || a.nome.localeCompare(b.nome, "pt-BR"));
  }

  return listas;
}

function calcularCargaInventario(items, system) {
  let atual = 0;

  for (const item of items ?? []) {
    const categoria = ["arma", "equipamento", "consumivel", "tesouro"].includes(item.type)
      ? item.type
      : item.system?.categoria;
    if (!["arma", "equipamento", "consumivel", "tesouro"].includes(categoria)) continue;

    const peso = Math.max(0, Number(item.system?.espacos) || 0);
    const quantidadeFonte = item.system?.quantidade;
    const quantidadeRaw = Number(quantidadeFonte);
    const quantidade = quantidadeFonte === null || quantidadeFonte === undefined || quantidadeFonte === ""
      ? 1
      : (Number.isFinite(quantidadeRaw) ? Math.max(0, quantidadeRaw) : 1);
    atual += peso * quantidade;
  }

  const modForca = Number(system.atributos?.forca?.mod) || 0;
  const limite = Math.max(0, 8 + (2 * modForca));
  const maxima = limite * 2;
  const basePercentual = maxima > 0 ? (atual / maxima) * 100 : (atual > 0 ? 100 : 0);

  return {
    atual: formatarCarga(atual),
    limite: formatarCarga(limite),
    maxima: formatarCarga(maxima),
    percentual: Math.min(100, Math.max(0, basePercentual)).toFixed(2),
    sobrecarregado: atual > limite,
    impossivel: atual > maxima
  };
}

function formatarCarga(valor) {
  const numero = Number(valor) || 0;
  return Number.isInteger(numero) ? numero : Number(numero.toFixed(2));
}

function formatarCriticoArma(critico) {
  const margem = Number.isFinite(Number(critico?.margem)) ? Number(critico.margem) : 20;
  const multiplicador = Number.isFinite(Number(critico?.multiplicador)) ? Number(critico.multiplicador) : 2;
  return `${margem}/${multiplicador}x`;
}

function obterResumoDanosArma(arma) {
  const danos = arma?.danos && typeof arma.danos === "object" ? arma.danos : null;
  if (!danos) return arma?.dano?.formula ?? "";

  return Object.values(danos)
    .map(dano => dano?.formula)
    .filter(Boolean)
    .join(" + ");
}

function obterResumoTiposDano(arma) {
  const danos = arma?.danos && typeof arma.danos === "object" ? arma.danos : null;
  if (!danos) return arma?.dano?.tipo ?? "";

  return [...new Set(Object.values(danos).map(dano => dano?.tipo).filter(Boolean))].join(", ");
}

function prepararListaCombate(colecao, prefixo, chavesIgnoradas = []) {
  if (!colecao || typeof colecao !== "object" || Array.isArray(colecao)) {
    return [];
  }

  const ignorar = new Set(["_empty", ...chavesIgnoradas]);

  return Object.entries(colecao)
    .filter(([key]) => {
      // Ignora chaves reservadas
      if (ignorar.has(key)) return false;
      // Ignora chaves que não seguem o padrão prefixo+número
      // Ex: "equipamentos" dentro de combate.equipamentos é lixo de schema
      const n = parseInt(String(key).replace(prefixo, ""), 10);
      return Number.isFinite(n) && n > 0;
    })
    .map(([key, item]) => ({
      key,
      ...obterPadroesListaCombate(prefixo),
      ...item
    }))
    .sort((a, b) => {
      const temOrdemA = a.ordem !== null && a.ordem !== undefined && a.ordem !== "" && Number.isFinite(Number(a.ordem));
      const temOrdemB = b.ordem !== null && b.ordem !== undefined && b.ordem !== "" && Number.isFinite(Number(b.ordem));
      const ordemA = temOrdemA ? Number(a.ordem) : obterIndiceLista(a.key, prefixo) * 1000;
      const ordemB = temOrdemB ? Number(b.ordem) : obterIndiceLista(b.key, prefixo) * 1000;
      return ordemA - ordemB || obterIndiceLista(a.key, prefixo) - obterIndiceLista(b.key, prefixo);
    });
}

function obterPadroesListaCombate(prefixo) {
  if (prefixo === "habilidade") {
    return {
      nome: "",
      ordem: null,
      atributo: "presenca",
      bonus: 0,
      atual: 0,
      max: 0,
      custo: "",
      descricao: ""
    };
  }

  if (prefixo === "ataque") {
    return {
      nome: "",
      bonus: 0,
      dano: "",
      tipo: ""
    };
  }

  return {
    nome: "",
    quantidade: 1,
    peso: "",
    cargas: "",
    notas: ""
  };
}

function obterIndiceLista(key, prefixo) {
  const indice = Number(String(key).replace(prefixo, ""));
  return Number.isInteger(indice) ? indice : 0;
}


function criarLinhaVaziaCombate(prefixo) {
  if (prefixo === "habilidade") {
    return {
      key: "habilidade1",
      nome: "",
      atributo: "presenca",
      bonus: 0,
      atual: 0,
      max: 0,
      custo: "",
      descricao: ""
    };
  }

  if (prefixo === "ataque") {
    return {
      key: "ataque1",
      nome: "",
      bonus: 0,
      dano: "",
      tipo: ""
    };
  }

  return {
    key: `${prefixo}1`,
    nome: "",
    quantidade: 1,
    peso: "",
    cargas: "",
    notas: ""
  };
}








