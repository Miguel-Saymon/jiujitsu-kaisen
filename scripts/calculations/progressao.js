import { RECURSOS } from "../constants/recursos.js";
import { ATRIBUTOS } from "../constants/atributos.js";
import { obterModificadorAtributo } from "../helpers/atributos.js";

export function calcularRecursosAoSubirNivel(
  system,
  novoNivel,
  especializacao
) {
  const updateData = {};

  const isNivel1 = novoNivel.nivel === 1;

  if (isNivel1 && !system.progressao?.pvInicialAplicado) {
    const modConstituicao = obterModificadorAtributo(
      system,
      ATRIBUTOS.CONSTITUICAO
    );

    const pvMaximo = Math.max(
      1,
      especializacao.pvInicial + modConstituicao
    );

    updateData["system.recursos.pv.max"] = pvMaximo;
    updateData["system.recursos.pv.atual"] = pvMaximo;

    updateData["system.recursos.integridade.max"] = pvMaximo;
    updateData["system.recursos.integridade.atual"] = pvMaximo;
  }

  if (!isNivel1 && novoNivel.pvGanho) {
  const pvAtual = Number(system.recursos?.pv?.atual) || 0;
  const pvMax = Number(system.recursos?.pv?.max) || 0;

  const integridadeAtual =
    Number(system.recursos?.integridade?.atual) || 0;

  const integridadeMax =
    Number(system.recursos?.integridade?.max) || 0;

  updateData["system.recursos.pv.max"] =
    pvMax + novoNivel.pvGanho;

  updateData["system.recursos.pv.atual"] =
    pvAtual + novoNivel.pvGanho;

  updateData["system.recursos.integridade.max"] =
    integridadeMax + novoNivel.pvGanho;

  updateData["system.recursos.integridade.atual"] =
    integridadeAtual + novoNivel.pvGanho;
}

  const recurso = especializacao.recurso;

  let ganhoBase = isNivel1
    ? especializacao.recursoInicial
    : especializacao.recursoPorNivel;

  if (
    isNivel1 &&
    recurso === RECURSOS.PE &&
    novoNivel.atributoInicial
  ) {
    ganhoBase += obterModificadorAtributo(
      system,
      novoNivel.atributoInicial
    );
  }

  ganhoBase = Math.max(0, ganhoBase);

  if (recurso === RECURSOS.ESTAMINA) {
    const estaminaAtual =
      Number(system.recursos?.[RECURSOS.ESTAMINA]?.atual) || 0;

    const estaminaMax =
      Number(system.recursos?.[RECURSOS.ESTAMINA]?.max) || 0;

    updateData["system.recursos.estamina.max"] =
      estaminaMax + ganhoBase;

    updateData["system.recursos.estamina.atual"] =
      estaminaAtual + ganhoBase;

    return updateData;
  }

  const peAtual =
    Number(system.recursos?.[RECURSOS.PE]?.atual) || 0;

  const peMax =
    Number(system.recursos?.[RECURSOS.PE]?.max) || 0;

  updateData["system.recursos.pe.max"] =
    peMax + ganhoBase;

  updateData["system.recursos.pe.atual"] =
    peAtual + ganhoBase;

  return updateData;
}
