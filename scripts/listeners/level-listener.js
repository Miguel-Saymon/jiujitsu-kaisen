import { obterEspecializacao, obterOpcoesEspecializacaoValidas } from "../helpers/especializacoes.js";
import { calcularRecursosAoSubirNivel } from "../calculations/progressao.js";
import { obterModificadorAtributo } from "../helpers/atributos.js";

export function registerLevelListener(sheet, html) {
  html.find(".jk-add-level").on("click", async () => {
    abrirDialogoAdicionarNivel(sheet);
  });

  html.find(".jk-remove-level").on("click", async () => {
    confirmarRemoverUltimoNivel(sheet);
  });

  html.find(".jk-reset-progression").on("click", async () => {
    confirmarResetProgressao(sheet);
  });
}

async function abrirDialogoAdicionarNivel(sheet) {
  const actor = sheet.actor;
  const system = actor.system;

  const nivelAtual = Number(system.info?.nivel) || 0;
  const proximoNivel = nivelAtual + 1;

  const especializacoes = obterOpcoesEspecializacaoValidas(system);

  if (Object.keys(especializacoes).length === 0) {
    ui.notifications.warn("Nenhuma especialização válida disponível.");
    return;
  }

  const opcoesHtml = Object.entries(especializacoes)
    .map(([chave, nome]) => `<option value="${chave}">${nome}</option>`)
    .join("");

  new Dialog({
    title: `Adicionar Nível ${proximoNivel}`,
    content: `
      <form>
        <div class="form-group">
          <label>Especialização</label>
          <select name="especializacao">
            ${opcoesHtml}
          </select>
        </div>
      </form>
    `,
    buttons: {
      cancelar: {
        label: "Cancelar"
      },

      confirmar: {
        label: "Confirmar",
        callback: async (html) => {
          const especializacao =
            html.find("[name='especializacao']").val();

if (proximoNivel === 1) {
  await verificarAtributoInicial(actor, {
    nivel: proximoNivel,
    especializacao
  });

  return;
}

await verificarGanhoPV(actor, {
  nivel: proximoNivel,
  especializacao
});
        }
      }
    },
    default: "confirmar"
  }).render(true);
}

async function verificarAtributoInicial(actor, novoNivel) {
  const especializacao = obterEspecializacao(
    novoNivel.especializacao
  );

  const atributosDisponiveis =
    especializacao?.atributoRecurso ?? [];

  if (atributosDisponiveis.length === 0) {
    await adicionarNivel(actor, novoNivel);
    return;
  }

  const nomesAtributos = {
    inteligencia: "Inteligência",
    sabedoria: "Sabedoria",
    presenca: "Presença"
  };

  const opcoesAtributos = atributosDisponiveis
    .map((atributo) => {
      return `
        <option value="${atributo}">
          ${nomesAtributos[atributo] ?? atributo}
        </option>
      `;
    })
    .join("");

  new Dialog({
    title: "Atributo do Recurso Inicial",
    content: `
      <form>
        <p>
          Esta especialização adiciona um modificador de atributo
          aos Pontos de Energia iniciais.
        </p>

        <div class="form-group">
          <label>Atributo</label>
          <select name="atributoInicial">
            ${opcoesAtributos}
          </select>
        </div>
      </form>
    `,
    buttons: {
      cancelar: {
        label: "Cancelar"
      },

      confirmar: {
        label: "Confirmar",
        callback: async (html) => {
          const atributoInicial =
            html.find("[name='atributoInicial']").val();

          await adicionarNivel(actor, {
            ...novoNivel,
            atributoInicial
          });
        }
      }
    },
    default: "confirmar"
  }).render(true);
}

async function verificarGanhoPV(actor, novoNivel) {
  const especializacao = obterEspecializacao(
    novoNivel.especializacao
  );

  const modCon =
    Number(actor.system.atributos?.constituicao?.mod) || 0;

  const bonusConTexto =
  `${modCon >= 0 ? "+ " : "- "}${Math.abs(modCon)} (CON)`;

  new Dialog({
    title: "Ganho de Pontos de Vida",

content: `
  <form>
    <div class="jk-dialog-summary">
      <p>
        <strong>Especialização:</strong>
        ${especializacao.nome}
      </p>

      <p>
        <strong>PV por rolagem:</strong>
        1d${especializacao.dadoPV} ${bonusConTexto}
      </p>

      <p>
        <strong>PV fixo:</strong>
        ${especializacao.pvFixoPorNivel} ${bonusConTexto}
      </p>
    </div>

    <hr>

    <div class="form-group">
      <label>Método</label>

      <select name="metodoPV">
        <option value="fixo">
  Valor Fixo
  (${especializacao.pvFixoPorNivel + modCon} PV)
</option>

<option value="rolagem">
  Rolar 1d${especializacao.dadoPV}
  ${bonusConTexto}
</option>

<option value="vantagem">
    Rolar 2d${especializacao.dadoPV}
    (melhor resultado)
    ${bonusConTexto}
</option>
      </select>
    </div>
  </form>
`,

    buttons: {
      cancelar: {
        label: "Cancelar"
      },

      confirmar: {
        label: "Confirmar",

        callback: async (html) => {
          const metodo =
            html.find("[name='metodoPV']").val();

          let pvGanho = 0;

          if (metodo === "fixo") {
            pvGanho =
              especializacao.pvFixoPorNivel + modCon;
          }

          if (metodo === "rolagem") {
            const roll = await new Roll(
              `1d${especializacao.dadoPV}`
            ).evaluate();

            pvGanho =
              roll.total + modCon;

            roll.toMessage({
              flavor: "Ganho de PV"
            });
          }

          if (metodo === "vantagem") {
            const roll = await new Roll(
              `2d${especializacao.dadoPV}kh`
            ).evaluate();

            pvGanho =
              roll.total + modCon;

            roll.toMessage({
              flavor: "Ganho de PV (Vantagem)"
            });
          }

          pvGanho = Math.max(1, pvGanho);

          await adicionarNivel(actor, {
            ...novoNivel,
            pvGanho
          });
        }
      }
    },

    default: "confirmar"
  }).render(true);
}

async function adicionarNivel(actor, novoNivel) {
  const system = actor.system;

  const especializacao = obterEspecializacao(
    novoNivel.especializacao
  );

  if (!especializacao) {
    ui.notifications.error("Especialização inválida.");
    return;
  }

  const niveisAtuais = foundry.utils.deepClone(
    system.progressao?.niveis ?? []
  );

  const updateData = {};

  const recursosAtualizados = calcularRecursosAoSubirNivel(
    system,
    novoNivel,
    especializacao
  );

  niveisAtuais.push(novoNivel);

  updateData["system.info.nivel"] = novoNivel.nivel;
  updateData["system.progressao.niveis"] = niveisAtuais;

if (novoNivel.nivel === 1) {
  updateData["system.progressao.pvInicialAplicado"] = true;

if (novoNivel.atributoInicial) {
  updateData["system.progressao.atributoInicial"] =
    novoNivel.atributoInicial;

  updateData["system.progressao.bonusAtributoInicial"] =
    obterModificadorAtributo(
      system,
      novoNivel.atributoInicial
    );
}
}

  Object.assign(updateData, recursosAtualizados);

  await actor.update(updateData);

  ui.notifications.info(`Nível ${novoNivel.nivel} adicionado.`);
}

async function confirmarRemoverUltimoNivel(sheet) {
  const actor = sheet.actor;
  const system = actor.system;

  const niveisAtuais = foundry.utils.deepClone(
    system.progressao?.niveis ?? []
  );

  if (niveisAtuais.length === 0) {
    ui.notifications.warn("Este personagem ainda não possui níveis para remover.");
    return;
  }

  const ultimoNivel = niveisAtuais[niveisAtuais.length - 1];
  const especializacao = obterEspecializacao(ultimoNivel.especializacao);

  new Dialog({
    title: "Remover Último Nível",
    content: `
      <p>
        Remover o último nível adicionado?
      </p>

      <p>
        <strong>Nível:</strong> ${ultimoNivel.nivel}<br>
        <strong>Especialização:</strong> ${especializacao?.nome ?? ultimoNivel.especializacao}
      </p>
    `,
    buttons: {
      cancelar: {
        label: "Cancelar"
      },

      confirmar: {
        label: "Confirmar",
        callback: async () => {
          await removerUltimoNivel(actor);
        }
      }
    },
    default: "cancelar"
  }).render(true);
}

async function removerUltimoNivel(actor) {
  const system = actor.system;

  const niveisAtuais = foundry.utils.deepClone(
    system.progressao?.niveis ?? []
  );

  if (niveisAtuais.length === 0) return;

  const ultimoNivel = niveisAtuais.pop();
  const especializacao = obterEspecializacao(ultimoNivel.especializacao);

  if (!especializacao) {
    ui.notifications.error("Especialização inválida no histórico de níveis.");
    return;
  }

  const novoNivel = niveisAtuais.length;
  const updateData = {
    "system.info.nivel": novoNivel,
    "system.progressao.niveis": niveisAtuais
  };

  let pvRemover = 0;

  if (ultimoNivel.nivel === 1) {
    const modCon =
      Number(system.atributos?.constituicao?.mod) || 0;

    pvRemover = Math.max(
      1,
      Number(especializacao.pvInicial) + modCon
    );

    updateData["system.progressao.atributoInicial"] = "";
    updateData["system.progressao.bonusAtributoInicial"] = 0;
    updateData["system.progressao.pvInicialAplicado"] = false;
  } else {
    pvRemover = Number(ultimoNivel.pvGanho) || 0;
  }

  if (pvRemover > 0) {
    const pvAtual = Number(system.recursos?.pv?.atual) || 0;
    const pvMax = Number(system.recursos?.pv?.max) || 0;

    const integridadeAtual =
      Number(system.recursos?.integridade?.atual) || 0;

    const integridadeMax =
      Number(system.recursos?.integridade?.max) || 0;

    updateData["system.recursos.pv.max"] =
      Math.max(0, pvMax - pvRemover);

    updateData["system.recursos.pv.atual"] =
      Math.min(
        Math.max(0, pvAtual - pvRemover),
        updateData["system.recursos.pv.max"]
      );

    updateData["system.recursos.integridade.max"] =
      Math.max(0, integridadeMax - pvRemover);

    updateData["system.recursos.integridade.atual"] =
      Math.min(
        Math.max(0, integridadeAtual - pvRemover),
        updateData["system.recursos.integridade.max"]
      );
  }

  const isNivel1 = ultimoNivel.nivel === 1;

  let recursoRemover = isNivel1
    ? Number(especializacao.recursoInicial) || 0
    : Number(especializacao.recursoPorNivel) || 0;

  if (
    isNivel1 &&
    especializacao.recurso === "pe" &&
    ultimoNivel.atributoInicial
  ) {
    recursoRemover += obterModificadorAtributo(
      system,
      ultimoNivel.atributoInicial
    );
  }

  recursoRemover = Math.max(0, recursoRemover);

  const recurso = especializacao.recurso;

  if (recurso === "estamina") {
    const atual = Number(system.recursos?.estamina?.atual) || 0;
    const max = Number(system.recursos?.estamina?.max) || 0;

    updateData["system.recursos.estamina.max"] =
      Math.max(0, max - recursoRemover);

    updateData["system.recursos.estamina.atual"] =
      Math.min(
        Math.max(0, atual - recursoRemover),
        updateData["system.recursos.estamina.max"]
      );
  }

  if (recurso === "pe") {
    const atual = Number(system.recursos?.pe?.atual) || 0;
    const max = Number(system.recursos?.pe?.max) || 0;

    updateData["system.recursos.pe.max"] =
      Math.max(0, max - recursoRemover);

    updateData["system.recursos.pe.atual"] =
      Math.min(
        Math.max(0, atual - recursoRemover),
        updateData["system.recursos.pe.max"]
      );
  }

  await actor.update(updateData);

  ui.notifications.info(`Nível ${ultimoNivel.nivel} removido.`);
}

async function confirmarResetProgressao(sheet) {
  const actor = sheet.actor;

  new Dialog({
    title: "Resetar Progressão",
    content: `
      <p>
        Tem certeza que deseja remover toda a progressão deste personagem?
      </p>
      <p>
        Isso retornará o nível para 0 e limpará especializações registradas.
      </p>
    `,
    buttons: {
      cancelar: {
        label: "Cancelar"
      },

      confirmar: {
        label: "Confirmar",
        callback: async () => {
          await actor.update({
            "system.info.nivel": 0,

            "system.progressao.atributoInicial": "",
	    "system.progressao.bonusAtributoInicial": 0,
            "system.progressao.pvInicialAplicado": false,
            "system.progressao.niveis": [],

            "system.recursos.pv.atual": 0,
            "system.recursos.pv.max": 0,
            "system.recursos.pe.atual": 0,
            "system.recursos.pe.max": 0,
            "system.recursos.estamina.atual": 0,
            "system.recursos.estamina.max": 0,
            "system.recursos.integridade.atual": 0,
            "system.recursos.integridade.max": 0
          });

          ui.notifications.info("Progressão resetada.");
        }
      }
    },
    default: "cancelar"
  }).render(true);
}

