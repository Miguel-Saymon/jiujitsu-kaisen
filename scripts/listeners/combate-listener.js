function gerarProximaChave(colecao, prefixo) {
  const indices = Object.keys(colecao ?? {})
    .map(chave => Number(chave.replace(prefixo, "")))
    .filter(Number.isInteger);

  const proximoIndice = indices.length ? Math.max(...indices) + 1 : 1;

  return `${prefixo}${proximoIndice}`;
}

export function registerCombatListener(sheet, html) {
  html.find(".jk-add-combat-row").on("click", async event => {
    event.preventDefault();

    const button = event.currentTarget;
    const path = button.dataset.path;
    const prefix = button.dataset.prefix;

    if (!path || !prefix) return;

    const valorAtual = foundry.utils.getProperty(sheet.actor.system, path);
    const colecao = valorAtual && typeof valorAtual === "object" && !Array.isArray(valorAtual)
      ? valorAtual
      : {};
    const chave = gerarProximaChave(colecao, prefix);

    await sheet.actor.update({
      [`system.${path}.${chave}`]: criarItemPadrao(prefix)
    });
  });

  html.find(".jk-remove-combat-row").on("click", async event => {
    event.preventDefault();

    const button = event.currentTarget;
    const path = button.dataset.path;
    const key = button.dataset.key;

    if (!path || !key) return;

    await sheet.actor.update({
      [`system.${path}.-=${key}`]: null
    });
  });
}

function criarItemPadrao(prefixo) {
  if (prefixo === "habilidade") {
    return {
      nome: "",
      atual: 0,
      max: 0,
      custo: ""
    };
  }

  if (prefixo === "ataque") {
    return {
      nome: "",
      bonus: 0,
      dano: "",
      tipo: ""
    };
  }

  return {
    nome: "",
    quantidade: 1,
    peso: "",
    notas: ""
  };
}

