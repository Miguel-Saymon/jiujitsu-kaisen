export function obterNivel(system) {
  return Number(system.info?.nivel) || 1;
}

export function obterBonusTreino(system) {
  const nivel = obterNivel(system);

  return 1 + Math.ceil(nivel / 4);
}

export function obterBonusMaestria(system) {
  return Math.floor(obterBonusTreino(system) * 1.5);
}
