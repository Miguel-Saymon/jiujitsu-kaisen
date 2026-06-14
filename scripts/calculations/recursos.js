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
