export function calcularAtributos(system) {
  const atributos = system.atributos ?? {};

  for (const atributo of Object.values(atributos)) {
    const valor = Number(atributo.valor) || 0;

    atributo.mod = Math.floor((valor - 10) / 2);

    atributo.modFormatado =
      atributo.mod >= 0
        ? `+${atributo.mod}`
        : `${atributo.mod}`;
  }

  return atributos;
}

