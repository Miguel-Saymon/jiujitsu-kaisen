import {
  obterBonusTreino,
  obterBonusMaestria
} from "../helpers/proficiencia.js";
import { calcularBonusTreinamentos } from "../trainings/training-calculations.js";

export function calcularPericias(system) {
  const pericias = system.pericias ?? {};
  const atributos = system.atributos ?? {};

  const nivel = Number(system.info?.nivel ?? 0);
  const metadeNivel = Math.floor(nivel / 2);
  const bonusTreinos = calcularBonusTreinamentos(system);

  for (const [key, pericia] of Object.entries(pericias)) {
    const atributoChave = pericia.atributo;
    const atributo = atributos[atributoChave];

    const modificador = Number(atributo?.mod) || 0;


    const treinadoEfetivo = Boolean(pericia.treinado);
    const maestriaEfetiva = Boolean(pericia.maestria);

    // Maestria é o nível superior de proficiência. Ela NÃO soma um segundo
    // bônus completo de treinamento: substitui o bônus de Treino pelo total
    // de Maestria (1,5x o bônus de treinamento, conforme o helper atual).
    const proficiencia = maestriaEfetiva
      ? obterBonusMaestria(system)
      : treinadoEfetivo
        ? obterBonusTreino(system)
        : 0;

    let bonusTreinamento = Number(bonusTreinos.pericias?.[key]) || 0;

    const outros = Number(pericia.outros) || 0;

    pericia.bonusTreinamento = bonusTreinamento;
    pericia.treinadoEfetivo = treinadoEfetivo;
    pericia.maestriaEfetiva = maestriaEfetiva;
    pericia.total =
      modificador +
      metadeNivel +
      proficiencia +
      outros +
      bonusTreinamento;

    pericia.totalFormatado =
      pericia.total >= 0
        ? `+${pericia.total}`
        : `${pericia.total}`;
  }

  return pericias;
}


