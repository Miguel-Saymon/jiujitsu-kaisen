export function registerAttributeListener(sheet, html) {
  html.find("input[name^='system.atributos.']").on("change", async (event) => {
    await atualizarPEPorAtributoInicial(sheet.actor, event.currentTarget);
  });
}

async function atualizarPEPorAtributoInicial(actor, input) {
  const system = actor.system;

  const atributoInicial = system.progressao?.atributoInicial;

  if (!atributoInicial) return;

  const match = input.name.match(
    /^system\.atributos\.([^.]+)\.valor$/
  );

  if (!match) return;

  const atributoAlterado = match[1];

  if (atributoAlterado !== atributoInicial) return;

  const novoValor = Number(input.value) || 10;

  const bonusAnterior =
    Number(system.progressao?.bonusAtributoInicial) || 0;

  const bonusNovo = Math.floor((novoValor - 10) / 2);

  const diferenca = bonusNovo - bonusAnterior;

  if (diferenca === 0) return;

  const peAtual = Number(system.recursos?.pe?.atual) || 0;
  const peMax = Number(system.recursos?.pe?.max) || 0;

  await actor.update({
    [input.name]: novoValor,
    "system.recursos.pe.atual": Math.max(0, peAtual + diferenca),
    "system.recursos.pe.max": Math.max(0, peMax + diferenca),
    "system.progressao.bonusAtributoInicial": bonusNovo
  });
}
