import { obterEspecializacao } from "../helpers/especializacoes.js";

export function calcularRecursos(system) {
  const niveis = system.progressao?.niveis ?? [];

  if (niveis.length === 0) return;

  const primeiroNivel = niveis[0];
  const primeiraEspecializacao = obterEspecializacao(
    primeiroNivel.especializacao
  );

  if (!primeiraEspecializacao) return;

  calcularPVInicial(system, primeiraEspecializacao);
  calcularRecursoPrincipal(system, niveis);
}

function calcularPVInicial(system, especializacao) {
  const modConstituicao = obterModificadorAtributo(
    system,
    "constituicao"
  );

  const pvMaximo = Math.max(
    1,
    especializacao.pvInicial + modConstituicao
  );

  system.recursos.pv.max = pvMaximo;

  if (Number(system.recursos.pv.atual) > pvMaximo) {
    system.recursos.pv.atual = pvMaximo;
  }

  system.recursos.integridade.max = pvMaximo;

  if (Number(system.recursos.integridade.atual) > pvMaximo) {
    system.recursos.integridade.atual = pvMaximo;
  }
}

function calcularRecursoPrincipal(system, niveis) {
  let peMaximo = 0;
  let estaminaMaxima = 0;

  for (const nivel of niveis) {
    const especializacao = obterEspecializacao(
      nivel.especializacao
    );

    if (!especializacao) continue;

    const isNivel1 = nivel.nivel === 1;

    let ganho = isNivel1
      ? especializacao.recursoInicial
      : especializacao.recursoPorNivel;

    if (
      isNivel1 &&
      especializacao.recurso === "pe" &&
      nivel.atributoInicial
    ) {
      ganho += obterModificadorAtributo(
        system,
        nivel.atributoInicial
      );
    }

    ganho = Math.max(0, ganho);

    if (especializacao.recurso === "estamina") {
      estaminaMaxima += ganho;
    } else {
      peMaximo += ganho;
    }
  }

  system.recursos.pe.max = peMaximo;
  system.recursos.estamina.max = estaminaMaxima;

  if (Number(system.recursos.pe.atual) > peMaximo) {
    system.recursos.pe.atual = peMaximo;
  }

  if (Number(system.recursos.estamina.atual) > estaminaMaxima) {
    system.recursos.estamina.atual = estaminaMaxima;
  }
}

function obterModificadorAtributo(system, atributo) {
  const valor = Number(system.atributos?.[atributo]?.valor) || 10;

  return Math.floor((valor - 10) / 2);
}


/**
 * Recalcula apenas a parcela de PV que depende da Constituição.
 *
 * O sistema historicamente persistia pvGanho já contendo CON. Para não
 * destruir rolagens antigas nem ajustes manuais no PV máximo, a migração
 * usa o estado atual como baseline: níveis legados recebem um pvBase
 * inferido e, a partir daí, passam a responder de forma determinística a
 * aumentos e reduções do modificador de Constituição.
 */
export function calcularAjustePVPorConstituicao(system, novoModConstituicao) {
  const niveisOriginais = system.progressao?.niveis ?? [];
  const modConAnterior = Number(system.atributos?.constituicao?.mod) || 0;
  const modConNovo = Number(novoModConstituicao) || 0;

  if (!Array.isArray(niveisOriginais) || niveisOriginais.length === 0) {
    return { diferencaPV: 0, niveis: [] };
  }

  let diferencaPV = 0;

  const niveis = niveisOriginais.map((nivel) => {
    const copia = foundry.utils.deepClone(nivel);
    const especializacao = obterEspecializacao(copia.especializacao);
    if (!especializacao) return copia;

    const isNivel1 = Number(copia.nivel) === 1;
    const pvBaseRegistrado = Number(copia.pvBase);
    const temPvBase = Number.isFinite(pvBaseRegistrado);

    let pvBase;
    let ganhoAnterior;

    if (temPvBase) {
      pvBase = pvBaseRegistrado;
      const modAplicado = Number.isFinite(Number(copia.pvModConAplicado))
        ? Number(copia.pvModConAplicado)
        : modConAnterior;
      ganhoAnterior = Math.max(1, pvBase + modAplicado);
    } else if (isNivel1) {
      // No nível 1 o valor-base é determinístico pela especialização.
      pvBase = Number(especializacao.pvInicial) || 0;
      ganhoAnterior = Math.max(1, pvBase + modConAnterior);
    } else {
      // Legado: pvGanho já continha o modificador de CON. Inferir o base
      // com a CON confirmada imediatamente antes desta alteração preserva
      // exatamente o ganho que estava contabilizado no personagem.
      const ganhoLegado = Math.max(1, Number(copia.pvGanho) || 1);
      pvBase = ganhoLegado - modConAnterior;
      ganhoAnterior = ganhoLegado;
    }

    const ganhoNovo = Math.max(1, pvBase + modConNovo);
    diferencaPV += ganhoNovo - ganhoAnterior;

    copia.pvBase = pvBase;
    copia.pvModConAplicado = modConNovo;
    copia.pvGanho = ganhoNovo;

    return copia;
  });

  return { diferencaPV, niveis };
}

export function obterGanhoPVAtualDoNivel(system, nivel, especializacao = null) {
  const dadosEspecializacao = especializacao ?? obterEspecializacao(nivel?.especializacao);
  if (!dadosEspecializacao || !nivel) return 0;

  const modCon = Number(system.atributos?.constituicao?.mod) || 0;
  const pvBaseRegistrado = Number(nivel.pvBase);

  if (Number.isFinite(pvBaseRegistrado)) {
    return Math.max(1, pvBaseRegistrado + modCon);
  }

  if (Number(nivel.nivel) === 1) {
    return Math.max(1, (Number(dadosEspecializacao.pvInicial) || 0) + modCon);
  }

  return Math.max(1, Number(nivel.pvGanho) || 1);
}

const DADOS_VIDA_POR_ESPECIALIZACAO = {
  lutador: "d12",
  especialistaCombate: "d10",
  especialistaTecnica: "d8",
  controlador: "d8",
  suporte: "d8",
  restringido: "d12"
};

export function calcularDadosVida(system) {
  const niveis = system.progressao?.niveis ?? [];

  const totais = {
    d8: 0,
    d10: 0,
    d12: 0
  };

  for (const nivel of niveis) {
    const dado = DADOS_VIDA_POR_ESPECIALIZACAO[nivel.especializacao];

    if (dado && totais[dado] !== undefined) {
      totais[dado] += 1;
    }
  }

  system.dadosVida ??= {};
  system.dadosVida.d8 ??= {};
  system.dadosVida.d10 ??= {};
  system.dadosVida.d12 ??= {};

  system.dadosVida.d8.total = totais.d8;
  system.dadosVida.d10.total = totais.d10;
  system.dadosVida.d12.total = totais.d12;

  system.dadosVida.d8.disponivel ??= totais.d8;
  system.dadosVida.d10.disponivel ??= totais.d10;
  system.dadosVida.d12.disponivel ??= totais.d12;
}

