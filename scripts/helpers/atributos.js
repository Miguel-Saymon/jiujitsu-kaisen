export function obterValorAtributo(system, atributo) {
  return Number(system.atributos?.[atributo]?.valor) || 10;
}

export function obterModificadorAtributo(system, atributo) {
  const valor = obterValorAtributo(system, atributo);

  return Math.floor((valor - 10) / 2);
}
