import { calcularBonusTreinamentos } from "../trainings/training-calculations.js";

export function calcularAtributos(system) {
  const atributos = system.atributos ?? {};
  const bonusTreinos = calcularBonusTreinamentos(system);

  for (const [key, atributo] of Object.entries(atributos)) {
    const valor = Number(atributo.valor) || 0;
    const bonusTreinamento = Number(bonusTreinos.atributos?.[key]) || 0;
    const valorEfetivo = valor + bonusTreinamento;

    atributo.bonusTreinamento = bonusTreinamento;
    atributo.valorEfetivo = valorEfetivo;
    atributo.mod = Math.floor((valorEfetivo - 10) / 2);

    atributo.modFormatado =
      atributo.mod >= 0
        ? `+${atributo.mod}`
        : `${atributo.mod}`;
  }

  return atributos;
}


