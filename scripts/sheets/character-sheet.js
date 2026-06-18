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
  calcularCombate(context.system);
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


function prepararItensCombate(items) {
  const listas = {
    ataques: [],
    equipamentos: [],
    consumiveis: [],
    tesouros: []
  };

  for (const item of items ?? []) {
    const system = item.system ?? {};
    const categoria = system.categoria ?? "";

    const base = {
      id: item.id,
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
        dano: system.arma?.dano?.formula ?? "",
        tipo: system.arma?.dano?.tipo ?? "",
        alcance: system.arma?.alcance ?? ""
      });
      continue;
    }

    if (categoria === "equipamento") {
      listas.equipamentos.push({
        ...base,
        tipo: system.equipamento?.tipo ?? "",
        defesa: system.equipamento?.defesa ?? "",
        penalidadeArmadura: system.equipamento?.penalidadeArmadura ?? ""
      });
      continue;
    }

    if (categoria === "consumivel") {
      listas.consumiveis.push({
        ...base,
        tipo: system.consumivel?.tipo ?? "",
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
    lista.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }

  return listas;
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
    .sort((a, b) => obterIndiceLista(a.key, prefixo) - obterIndiceLista(b.key, prefixo));
}

function obterPadroesListaCombate(prefixo) {
  if (prefixo === "habilidade") {
    return {
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




