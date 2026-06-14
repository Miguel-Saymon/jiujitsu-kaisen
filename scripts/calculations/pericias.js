import {
  obterBonusTreino,
  obterBonusMaestria
} from "../helpers/proficiencia.js";

export function calcularPericias(system) {
  const pericias = system.pericias ?? {};
  const atributos = system.atributos ?? {};

  const nivel = Number(system.info?.nivel ?? 0);
  const metadeNivel = Math.floor(nivel / 2);

  for (const pericia of Object.values(pericias)) {
    const atributoChave = pericia.atributo;
    const atributo = atributos[atributoChave];

    const modificador = Number(atributo?.mod) || 0;

    const treino =
      pericia.treinado
        ? obterBonusTreino(system)
        : 0;

    const maestria =
      pericia.maestria
        ? obterBonusMaestria(system)
        : 0;

    const outros = Number(pericia.outro) || 0;

    pericia.total =
      modificador +
      metadeNivel +
      treino +
      maestria +
      outros;

    pericia.totalFormatado =
      pericia.total >= 0
        ? `+${pericia.total}`
        : `${pericia.total}`;
  }

  return pericias;
}
