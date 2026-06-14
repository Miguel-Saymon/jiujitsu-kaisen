import { ESPECIALIZACAO_CHAVES } from "../constants/especializacoes.js";
import { RECURSOS } from "../constants/recursos.js";
import { ATRIBUTOS } from "../constants/atributos.js";

export const ESPECIALIZACOES = {
  [ESPECIALIZACAO_CHAVES.LUTADOR]: {
    nome: "Lutador",
    pvInicial: 12,
    dadoPV: 10,
    pvFixoPorNivel: 6,
    recursoInicial: 4,
    recursoPorNivel: 4,
    atributoRecurso: [],
    recurso: RECURSOS.PE
  },

  [ESPECIALIZACAO_CHAVES.ESPECIALISTA_COMBATE]: {
    nome: "Especialista em Combate",
    pvInicial: 12,
    dadoPV: 10,
    pvFixoPorNivel: 6,
    recursoInicial: 4,
    recursoPorNivel: 4,
    atributoRecurso: [],
    recurso: RECURSOS.PE
  },

  [ESPECIALIZACAO_CHAVES.ESPECIALISTA_TECNICA]: {
    nome: "Especialista em Técnica",
    pvInicial: 10,
    dadoPV: 8,
    pvFixoPorNivel: 5,
    recursoInicial: 6,
    recursoPorNivel: 6,
    atributoRecurso: [
      ATRIBUTOS.INTELIGENCIA,
      ATRIBUTOS.SABEDORIA
    ],
    recurso: RECURSOS.PE
  },

  [ESPECIALIZACAO_CHAVES.CONTROLADOR]: {
    nome: "Controlador",
    pvInicial: 10,
    dadoPV: 8,
    pvFixoPorNivel: 5,
    recursoInicial: 5,
    recursoPorNivel: 5,
    atributoRecurso: [
      ATRIBUTOS.PRESENCA,
      ATRIBUTOS.SABEDORIA
    ],
    recurso: RECURSOS.PE
  },

  [ESPECIALIZACAO_CHAVES.SUPORTE]: {
    nome: "Suporte",
    pvInicial: 10,
    dadoPV: 8,
    pvFixoPorNivel: 5,
    recursoInicial: 5,
    recursoPorNivel: 5,
    atributoRecurso: [
      ATRIBUTOS.PRESENCA,
      ATRIBUTOS.SABEDORIA
    ],
    recurso: RECURSOS.PE
  },

  [ESPECIALIZACAO_CHAVES.RESTRINGIDO]: {
    nome: "Restringido",
    pvInicial: 16,
    dadoPV: 12,
    pvFixoPorNivel: 7,
    recursoInicial: 4,
    recursoPorNivel: 4,
    atributoRecurso: [],
    recurso: RECURSOS.ESTAMINA
  }
};

export function obterEspecializacao(chave) {
  return ESPECIALIZACOES[chave] ?? null;
}

export function obterOpcoesEspecializacao() {
  return Object.entries(ESPECIALIZACOES).reduce((opcoes, [chave, dados]) => {
    opcoes[chave] = dados.nome;
    return opcoes;
  }, {});
}

export function personagemEhRestringido(system) {
  const niveis = system.progressao?.niveis ?? [];

  return niveis.some((nivel) =>
  nivel.especializacao === ESPECIALIZACAO_CHAVES.RESTRINGIDO
  );
}

export function personagemTemProgressao(system) {
  const niveis = system.progressao?.niveis ?? [];

  return niveis.length > 0;
}

export function podeEscolherEspecializacao(system, especializacao) {
  const temProgressao = personagemTemProgressao(system);
  const ehRestringido = personagemEhRestringido(system);

  if (!temProgressao) return true;

  if (ehRestringido) {
  return especializacao === ESPECIALIZACAO_CHAVES.RESTRINGIDO;
  }

  if (especializacao === ESPECIALIZACAO_CHAVES.RESTRINGIDO) {
    return false;
  }

  return true;
}

export function obterOpcoesEspecializacaoValidas(system) {
  return Object.entries(ESPECIALIZACOES).reduce(
    (opcoes, [chave, dados]) => {
      if (podeEscolherEspecializacao(system, chave)) {
        opcoes[chave] = dados.nome;
      }

      return opcoes;
    },
    {}
  );
}
