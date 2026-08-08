import { registerInvocacaoListener } from "../listeners/invocacao-listener.js";

const ATRIBUTOS = {
  forca: "Força",
  destreza: "Destreza",
  constituicao: "Constituição",
  inteligencia: "Inteligência",
  sabedoria: "Sabedoria",
  presenca: "Presença"
};

const PERICIAS_INVOCACAO = [
  ["atletismo", "Atletismo", "forca"],
  ["acrobacia", "Acrobacia", "destreza"],
  ["furtividade", "Furtividade", "destreza"],
  ["prestidigitacao", "Prestidigitação", "destreza"],
  ["feiticaria", "Feitiçaria", "inteligencia"],
  ["historia", "História", "inteligencia"],
  ["investigacao", "Investigação", "inteligencia"],
  ["oficio1", "Ofício", "inteligencia", true],
  ["oficio2", "Ofício", "inteligencia", true],
  ["tecnologia", "Tecnologia", "inteligencia"],
  ["teologia", "Teologia", "inteligencia"],
  ["direcao", "Direção", "sabedoria"],
  ["intuicao", "Intuição", "sabedoria"],
  ["medicina", "Medicina", "sabedoria"],
  ["ocultismo", "Ocultismo", "sabedoria"],
  ["percepcao", "Percepção", "sabedoria"],
  ["sobrevivencia", "Sobrevivência", "sabedoria"],
  ["enganacao", "Enganação", "presenca"],
  ["intimidacao", "Intimidação", "presenca"],
  ["performance", "Performance", "presenca"],
  ["persuasao", "Persuasão", "presenca"]
];

export class JKInvocacaoSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["jiujitsu-kaisen", "sheet", "actor", "invocacao-sheet"],
      template: "systems/jiujitsu-kaisen/templates/invocacao-sheet.hbs",
      width: 780,
      height: 730,
      resizable: true,
      tabs: [
        {
          navSelector: ".jk-invocacao-tabs",
          contentSelector: ".jk-invocacao-sheet-body",
          initial: "principal"
        }
      ]
    });
  }

  getData() {
    const context = super.getData();
    context.system = this.actor.system;

    context.atributosInvocacao = Object.entries(this.actor.system.atributos ?? {}).map(([key, atributo]) => {
      const valor = Number(atributo?.valor ?? 10);

      return {
        key,
        nome: ATRIBUTOS[key] ?? key,
        valor,
        modificador: Math.floor((valor - 10) / 2)
      };
    });

    const configuracaoResistencias = [
      ["astucia", "Astúcia", "inteligencia", "INT"],
      ["fortitude", "Fortitude", "constituicao", "CON"],
      ["integridade", "Integridade", "constituicao", "CON"],
      ["reflexos", "Reflexos", "destreza", "DES"],
      ["vontade", "Vontade", "sabedoria", "SAB"]
    ];

    context.resistenciasInvocacao = configuracaoResistencias.map(([key, nome, atributoKey, atributoLabel]) => {
      const valorAtributo = Number(this.actor.system.atributos?.[atributoKey]?.valor ?? 10);
      const modificador = Math.floor((valorAtributo - 10) / 2);
      const outros = Number(this.actor.system.testesResistencia?.[key]?.outros ?? 0);

      return {
        key,
        nome,
        atributoKey,
        atributoLabel,
        modificador,
        outros,
        total: modificador + outros
      };
    });

    const periciasRaw = this.actor.system.pericias ?? {};
    const periciasLegadas = Array.isArray(periciasRaw);

    context.periciasInvocacao = PERICIAS_INVOCACAO.map(([key, nome, atributoPadrao, customizavel], index) => {
      const pericia = periciasLegadas
        ? (periciasRaw[index] ?? {})
        : (periciasRaw[key] ?? {});
      const atributoKey = String(pericia?.atributo || atributoPadrao);
      const valorAtributo = Number(this.actor.system.atributos?.[atributoKey]?.valor ?? 10);
      const modificador = Math.floor((valorAtributo - 10) / 2);
      const outros = Number(pericia?.outros ?? 0);

      return {
        key,
        dataPath: periciasLegadas ? String(index) : key,
        nome,
        atributo: atributoKey,
        outros,
        customizavel: Boolean(customizavel),
        customNome: String(pericia?.customNome ?? ""),
        // Invocações usam somente modificador do atributo + Outros.
        bonus: modificador + outros
      };
    }).sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

    context.invocacaoAtaques = [...(this.actor.items ?? [])]
      .filter(item => item.type === "arma")
      .sort((a, b) => Number(a.sort ?? 0) - Number(b.sort ?? 0))
      .map(item => ({
        id: item.id,
        nome: item.name,
        dano: obterDanoPrincipal(item),
        critico: obterCritico(item)
      }));

    context.invocacaoHabilidades = normalizarColecao(this.actor.system.habilidadesLista)
      .sort((a, b) => Number(a.ordem ?? 0) - Number(b.ordem ?? 0));

    context.opcoesAtributosInvocacao = ATRIBUTOS;
    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);
    registerInvocacaoListener(this, html);

    if (this._jkInvocacaoReturnTab) {
      this._tabs?.[0]?.activate?.(this._jkInvocacaoReturnTab);
      this._jkInvocacaoReturnTab = null;
    }
  }
}

function obterDanoPrincipal(item) {
  const danos = item.system?.arma?.danos;
  if (danos && typeof danos === "object") {
    const primeiraFormula = Object.values(danos)
      .map(dano => String(dano?.formula ?? "").trim())
      .find(Boolean);

    if (primeiraFormula) return primeiraFormula;
  }

  return String(item.system?.arma?.dano?.formula ?? "").trim() || "—";
}

function obterCritico(item) {
  const margem = Number(item.system?.arma?.critico?.margem ?? 20);
  const multiplicador = Number(item.system?.arma?.critico?.multiplicador ?? 2);
  return `${margem}/${multiplicador}x`;
}

function normalizarColecao(valor) {
  if (Array.isArray(valor)) return valor;
  if (valor && typeof valor === "object") return Object.values(valor);
  return [];
}


