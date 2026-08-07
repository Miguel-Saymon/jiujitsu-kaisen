import { calcularBonusTreinamentos, calcularAptidoesEfetivas } from "./training-calculations.js";

export const TRAINING_CONFIG = {
  agilidade: {
    nome: "Treino de Agilidade",
    etapas: [
      { foco: 1, requisito: "—", beneficio: "Seu Deslocamento aumenta em 1,5 metros." },
      { foco: 1, requisito: "—", beneficio: "Você recebe um bônus de +2 em rolagens de Acrobacia." },
      { foco: 1, requisito: "Destreza 14", beneficio: "Você recebe um bônus de +2 em rolagens de Iniciativa." },
      { foco: 2, requisito: "Destreza 16", beneficio: "Você recebe um bônus de +2 em rolagens de Reflexos." }
    ],
    completo: "Com grande velocidade e agilidade, você se torna rápido e capaz de um nível superior de mobilidade e esquivas. Sua margem necessária para conseguir um sucesso crítico em um TR de Reflexos reduz em 2. Seu Deslocamento aumenta em 4,5 metros."
  },
  barreiras: {
    nome: "Treino de Barreiras",
    etapas: [
      { foco: 1, requisito: "Técnicas de Barreira", beneficio: "Os pontos de vida das paredes da sua Técnica de Barreira aumentam em 10." },
      { foco: 1, requisito: "—", beneficio: "Seu Nível de Aptidão em Barreiras aumenta em 1." },
      { foco: 1, requisito: "Nível de Aptidão em Barreiras 2", beneficio: "Os pontos de vida das paredes da sua Técnica de Barreira aumentam em 10." },
      { foco: 2, requisito: "Nível de Aptidão em Barreiras 3", beneficio: "Ao utilizar Técnicas de Barreira, o máximo de paredes que você pode criar aumenta em 2." }
    ],
    completo: "Você domina a técnica de barreiras, conseguindo conferir uma resistência elevada. Toda parede que você criar com Técnicas de Barreira recebe RD igual ao seu Nível de Aptidão em Barreiras."
  },
  compreensao: {
    nome: "Treino de Compreensão",
    etapas: [
      { foco: 1, requisito: "—", beneficio: "Seu máximo de energia amaldiçoada aumenta em 2." },
      { foco: 1, requisito: "—", beneficio: "Você recebe um bônus de +1 em rolagens de Feitiçaria e Ocultismo." },
      { foco: 1, requisito: "Nível de Aptidão em Aura 2", beneficio: "Seu máximo de energia amaldiçoada aumenta em 3." },
      { foco: 2, requisito: "Nível de Aptidão em Aura 3", beneficio: "Você recebe um bônus de +2 em rolagens de Feitiçaria e Ocultismo." }
    ],
    completo: "Você chega muito perto de compreender profundamente a energia amaldiçoada, tornando-se familiar com ela e entendendo melhor uma parte dela. Você aumenta um nível de aptidão à sua escolha em 1.",
    seletor: "aptidao"
  },
  controleEnergia: {
    nome: "Controle de Energia",
    etapas: [
      { foco: 1, requisito: "—", beneficio: "Seu máximo de energia amaldiçoada aumenta em 2." },
      { foco: 1, requisito: "—", beneficio: "Quando uma cena de combate iniciar, você recebe 4 pontos de energia amaldiçoada temporários." },
      { foco: 1, requisito: "Nível de Aptidão em Controle e Leitura 2", beneficio: "Seu máximo de energia amaldiçoada aumenta em 3." },
      { foco: 2, requisito: "Nível de Aptidão em Controle e Leitura 3", beneficio: "Seu Nível de Aptidão em Controle e Leitura aumenta em 1." }
    ],
    completo: "Você já estabeleceu uma profunda conexão com a energia amaldiçoada, assim como a conhece cada vez mais completamente. Em uma situação de combate, imerso no fervor da batalha, você consegue gerar energia: durante uma cena de combate, no começo de toda rodada, você ganha PE Temporário igual a metade do seu bônus de treinamento."
  },
  dominios: {
    nome: "Treino de Domínios",
    etapas: [
      { foco: 1, requisito: "Expansão de Domínio Incompleta", beneficio: "Você recebe um bônus de +1 em rolagens para confrontos e contestações de expansões." },
      { foco: 1, requisito: "—", beneficio: "A área da sua Expansão de Domínio aumenta em 3 metros." },
      { foco: 1, requisito: "Expansão de Domínio Completa", beneficio: "Você recebe um bônus de +1 em rolagens para confrontos e contestações de expansões." },
      { foco: 2, requisito: "Nível de Aptidão em Domínio 5", beneficio: "Você pode colocar um efeito adicional em sua expansão de domínio." }
    ],
    completo: "Você se torna um mestre das expansões, entendendo como conseguir moldar perfeitamente diante a sua vontade e necessidade do momento. Você recebe a aptidão amaldiçoada Modificação Completa."
  },
  energiaReversa: {
    nome: "Energia Reversa",
    etapas: [
      { foco: 1, requisito: "Energia Reversa", beneficio: "A quantidade de pontos de energia reversa que você pode gastar em Aptidões de Energia Reversa aumenta em 1." },
      { foco: 1, requisito: "—", beneficio: "Seu Nível de Aptidão em Energia Reversa aumenta em 1." },
      { foco: 1, requisito: "Nível de Aptidão em Energia Reversa 4", beneficio: "O custo para regenerar um membro ou ferida interna com Regeneração Aprimorada é reduzido em 2 pontos de energia reversa." },
      { foco: 2, requisito: "Nível de Aptidão em Energia Reversa 5", beneficio: "Você também pode usar Fluxo Constante para regenerar membros, ao invés de apenas se curar." }
    ],
    completo: "Sua maestria sobre a energia reversa te permite recuperar até mesmo aquilo que parece impossível: você pode usar a aptidão amaldiçoada Regeneração Aprimorada para curar sua exaustão de técnica após usar expansão de domínio, reduzindo em um turno para 2 pontos de energia reversa gastos."
  },
  luta: {
    nome: "Treino de Luta",
    etapas: [
      { foco: 1, requisito: "—", beneficio: "O dano de seus ataques desarmados aumenta em 1 nível." },
      { foco: 1, requisito: "—", beneficio: "Você recebe +2 em sua Defesa e em rolagens para as ações Agarrar, Derrubar e Empurrar." },
      { foco: 1, requisito: "Força ou Destreza 14", beneficio: "O dano de seus ataques desarmados aumenta em 1 nível." },
      { foco: 2, requisito: "Força ou Destreza 16", beneficio: "O dano de seus ataques desarmados aumenta em 2 níveis." }
    ],
    completo: "Você se torna altamente proficiente em luta, conseguindo extrair ao máximo de seu corpo e manobras. Você recebe acesso ao efeito de crítico de ataques desarmados (pugilato). Além disso, você pode, uma vez por rodada, escolher realizar uma rolagem de Acrobacia ou Atletismo com vantagem."
  },
  manejoArma: {
    nome: "Manejo de Arma",
    etapas: [
      { foco: 1, requisito: "—", beneficio: "Escolha uma arma específica: você se torna treinado com ela. Caso já seja, adicione +2 em rolagens de dano com ela." },
      { foco: 1, requisito: "—", beneficio: "Você recebe um bônus de +1 em jogadas de ataque com a arma escolhida." },
      { foco: 1, requisito: "—", beneficio: "Enquanto estiver manejando a arma escolhida, você recebe acesso ao efeito crítico dela." },
      { foco: 2, requisito: "—", beneficio: "Você recebe +1 em jogadas de ataque e +2 em rolagens de dano com a arma escolhida." }
    ],
    completo: "Você se torna um mestre no manejo da arma para qual se dedicou a treinar e dominar. Enquanto estiver manejando a arma escolhida, ela recebe um Encantamento de ferramenta amaldiçoada adicional."
  },
  pericia: {
    nome: "Treino de Perícia",
    etapas: [
      { foco: 1, requisito: "—", beneficio: "Escolha uma perícia: você se torna treinado nela. Caso já seja, adicione +1 em testes de perícia usando-a." },
      { foco: 1, requisito: "—", beneficio: "Duas vezes por descanso, você pode escolher realizar um teste da perícia escolhida para o treinamento com vantagem." },
      { foco: 1, requisito: "—", beneficio: "Você se torna mestre na perícia escolhida. Caso já seja, adicione +2 em testes de perícia usando-a." },
      { foco: 2, requisito: "—", beneficio: "Uma vez por cena, você pode escolher obter um sucesso garantido em um teste da perícia escolhida, desde que não seja um teste oposto." }
    ],
    completo: "Você treinou e se dedicou tanto a uma perícia específica, que ela se tornou algo no qual você é quase incapaz de falhar, mantendo uma consistência invejável. Caso realize um teste da perícia escolhida e obtenha um resultado menor do que 5 no d20, você pode o rolar novamente e manter o melhor resultado."
  },
  potencialFisico: {
    nome: "Potencial Físico",
    restrito: true,
    etapas: [
      { foco: 1, requisito: "Restrito", beneficio: "Seu máximo de pontos de estamina aumenta em 2." },
      { foco: 1, requisito: "Nível 4 de Personagem", beneficio: "Você recebe 2 pontos de atributo para distribuir entre seus atributos físicos." },
      { foco: 1, requisito: "—", beneficio: "Seu máximo de pontos de estamina aumenta em 4." },
      { foco: 2, requisito: "—", beneficio: "Você recebe uma Dádiva do Céu adicional." }
    ],
    completo: "Você conseguiu chegar em um ponto onde seu corpo constantemente se renova e sua energia parece nunca ter fim. Durante uma cena de combate, no começo de toda rodada, você recebe uma quantidade de pontos de estamina temporários igual a metade do seu bônus de treinamento.",
    seletor: "atributosFisicos"
  },
  resistencia: {
    nome: "Treino de Resistência",
    etapas: [
      { foco: 1, requisito: "—", beneficio: "Seus pontos de vida máximos aumentam em 4." },
      { foco: 1, requisito: "—", beneficio: "Sua quantidade de dados de vida disponíveis por descanso aumenta em 2." },
      { foco: 1, requisito: "Constituição 14", beneficio: "Recebe um bônus de +2 em rolagens de Fortitude." },
      { foco: 2, requisito: "Constituição 16", beneficio: "Seus pontos de vida máximos aumentam em 6." }
    ],
    completo: "Seu físico atinge um nível superior, concedendo-o uma grande resistência e vigor. Sua margem necessária para conseguir um sucesso crítico em um TR de Fortitude reduz em 2. Uma vez por cena, você ignora a primeira falha em testes de morte. Seus pontos de vida máximos aumentam em mais 10 pontos."
  }
};


const TRAINING_AUTOMATION_MAP = {
  agilidade: { etapas: [1, 2, 3, 4], completo: true },
  barreiras: { etapas: [2] },
  compreensao: { etapas: [1, 2, 3, 4], completo: true },
  controleEnergia: { etapas: [1, 3, 4] },
  dominios: { etapas: [] },
  energiaReversa: { etapas: [2] },
  luta: { etapas: [2] },
  manejoArma: { etapas: [] },
  pericia: { etapas: [] },
  potencialFisico: { etapas: [1, 2, 3] },
  resistencia: { etapas: [1, 3, 4], completo: true }
};

export const TRAINING_APTITUDE_OPTIONS = {
  "": "Escolha uma aptidão",
  aura: "Aura",
  controle: "Controle e Leitura",
  barreira: "Barreiras",
  dominio: "Domínio",
  reversa: "Energia Reversa"
};

export const TRAINING_PHYSICAL_ATTRIBUTE_OPTIONS = {
  "": "Escolha um atributo",
  forca: "Força",
  destreza: "Destreza",
  constituicao: "Constituição"
};



export function avaliarRequisitoTreinamento(system, treinoKey, numeroEtapa) {
  const config = TRAINING_CONFIG?.[treinoKey];
  const etapaConfig = config?.etapas?.[numeroEtapa - 1];
  const requisito = String(etapaConfig?.requisito ?? "—").trim();

  if (!requisito || requisito === "—") {
    return { status: "cumprido", cumprido: true, manual: false, texto: requisito || "—", detalhe: "Sem requisito adicional." };
  }

  const bonus = calcularBonusTreinamentos(system);
  const atributos = system.atributos ?? {};
  const valorAtributo = key => (Number(atributos?.[key]?.valor) || 0) + (Number(bonus.atributos?.[key]) || 0);
  const aptidoes = calcularAptidoesEfetivas(system, bonus);
  const valorAptidao = key => Number(aptidoes?.[key]?.total) || 0;
  const nivel = Number(system.info?.nivel) || Number(system.progressao?.nivel) || (system.progressao?.niveis ?? []).length || 0;
  const ehRestringido = (system.progressao?.niveis ?? []).some(n => n?.especializacao === "restringido");

  const atributoMatch = requisito.match(/^(Destreza|Constituição)\s+(\d+)$/i);
  if (atributoMatch) {
    const mapa = { destreza: "destreza", constituição: "constituicao", constituicao: "constituicao" };
    const chave = mapa[atributoMatch[1].toLowerCase()] ?? atributoMatch[1].toLowerCase();
    const minimo = Number(atributoMatch[2]) || 0;
    const atual = valorAtributo(chave);
    return resultadoNumerico(requisito, atual, minimo, atributoMatch[1]);
  }

  const atributoOuMatch = requisito.match(/^Força ou Destreza\s+(\d+)$/i);
  if (atributoOuMatch) {
    const minimo = Number(atributoOuMatch[1]) || 0;
    const forca = valorAtributo("forca");
    const destreza = valorAtributo("destreza");
    const atual = Math.max(forca, destreza);
    return {
      status: atual >= minimo ? "cumprido" : "nao-cumprido",
      cumprido: atual >= minimo,
      manual: false,
      texto: requisito,
      detalhe: `Força ${forca} / Destreza ${destreza}; necessário ${minimo}.`
    };
  }

  const aptMatch = requisito.match(/^Nível de Aptidão em (Aura|Barreiras|Controle e Leitura|Domínio|Energia Reversa)\s+(\d+)$/i);
  if (aptMatch) {
    const mapa = {
      "aura": "aura",
      "barreiras": "barreira",
      "controle e leitura": "controle",
      "domínio": "dominio",
      "dominio": "dominio",
      "energia reversa": "reversa"
    };
    const chave = mapa[aptMatch[1].toLowerCase()];
    const minimo = Number(aptMatch[2]) || 0;
    const atual = valorAptidao(chave);
    return resultadoNumerico(requisito, atual, minimo, `Aptidão em ${aptMatch[1]}`);
  }

  if (/^Nível 4 de Personagem$/i.test(requisito)) {
    return resultadoNumerico(requisito, nivel, 4, "Nível");
  }

  if (/^Restrito$/i.test(requisito)) {
    return {
      status: ehRestringido ? "cumprido" : "nao-cumprido",
      cumprido: ehRestringido,
      manual: false,
      texto: requisito,
      detalhe: ehRestringido ? "O personagem possui nível em Restringido." : "O personagem não possui nível em Restringido."
    };
  }

  if (/^Energia Reversa$/i.test(requisito)) {
    const atual = valorAptidao("reversa");
    return {
      status: atual > 0 ? "cumprido" : "nao-cumprido",
      cumprido: atual > 0,
      manual: false,
      texto: requisito,
      detalhe: atual > 0 ? `Energia Reversa disponível (Aptidão ${atual}).` : "Nenhum nível de Aptidão em Energia Reversa foi encontrado."
    };
  }

  if (/^Expansão de Domínio (Incompleta|Completa)$/i.test(requisito)) {
    const esperado = requisito.toLowerCase().includes("incompleta") ? "incompleta" : "completa";
    const tipo = String(system.tecnicas?.especiais?.expansao?.tipo ?? "").trim().toLowerCase();
    const incompleta = tipo.includes("incompleta");
    const completa = !incompleta && tipo.includes("completa");
    const cumprido = esperado === "incompleta" ? incompleta : completa;
    return {
      status: cumprido ? "cumprido" : "nao-cumprido",
      cumprido,
      manual: false,
      texto: requisito,
      detalhe: tipo ? `Tipo atual da Expansão: ${system.tecnicas?.especiais?.expansao?.tipo}.` : "O Tipo da Expansão de Domínio está vazio."
    };
  }

  // Requisitos narrativos ainda sem campo estruturado próprio.
  return {
    status: "manual",
    cumprido: false,
    manual: true,
    texto: requisito,
    detalhe: "Este requisito ainda não possui verificação automática e deve ser confirmado manualmente."
  };
}

function resultadoNumerico(texto, atual, minimo, label) {
  const cumprido = atual >= minimo;
  return {
    status: cumprido ? "cumprido" : "nao-cumprido",
    cumprido,
    manual: false,
    texto,
    detalhe: `${label}: ${atual}; necessário ${minimo}.`
  };
}

export function obterPendenciasSequencia(system, treinoKey, numeroEtapa) {
  if (numeroEtapa <= 1) return [];
  const etapas = system.treinamentos?.[treinoKey]?.etapas ?? {};
  const faltantes = [];
  for (let numero = 1; numero < numeroEtapa; numero += 1) {
    if (!etapas[`e${numero}`]) faltantes.push(numero);
  }
  return faltantes;
}

export function prepararTreinamentos(system) {
  const estado = system.treinamentos ?? {};
  return Object.entries(TRAINING_CONFIG).map(([key, config]) => {
    const salvo = estado[key] ?? {};
    const etapasSalvas = salvo.etapas ?? {};
    const automacao = TRAINING_AUTOMATION_MAP[key] ?? { etapas: [] };
    const etapas = config.etapas.map((etapa, index) => {
      const numero = index + 1;
      const requisitoAvaliacao = avaliarRequisitoTreinamento(system, key, numero);
      const pendenciasSequencia = obterPendenciasSequencia(system, key, numero);
      return {
        ...etapa,
        numero,
        key: `e${numero}`,
        ativa: Boolean(etapasSalvas[`e${numero}`]),
        automatizada: automacao.etapas.includes(numero),
        requisitoStatus: requisitoAvaliacao.status,
        requisitoCumprido: requisitoAvaliacao.cumprido,
        requisitoManual: requisitoAvaliacao.manual,
        requisitoDetalhe: requisitoAvaliacao.detalhe,
        sequenciaPendente: pendenciasSequencia.length > 0,
        etapasAnterioresPendentes: pendenciasSequencia.join(", ")
      };
    });
    const completo = etapas.every(e => e.ativa);
    const progressoAtual = Math.max(0, Number(salvo.progresso?.atual) || 0);
    const progressoMeta = Math.max(0, Number(salvo.progresso?.meta) || 0);
    const progressoPercentual = progressoMeta > 0
      ? Math.min(100, Math.max(0, (progressoAtual / progressoMeta) * 100))
      : 0;
    const focoGasto = etapas.reduce((sum, e) => sum + (e.ativa ? e.foco : 0), 0);

    let seletor = null;
    if (config.seletor === "aptidao") {
      seletor = { tipo: "aptidao", label: "Aptidão escolhida", valor: salvo.aptidaoEscolhida ?? "", options: TRAINING_APTITUDE_OPTIONS };
    } else if (config.seletor === "arma") {
      seletor = { tipo: "arma", label: "Arma escolhida", valor: salvo.armaEscolhida ?? "" };
    } else if (config.seletor === "atributosFisicos") {
      seletor = {
        tipo: "atributosFisicos",
        label: "Pontos de atributo",
        valor1: salvo.atributoPonto1 ?? "",
        valor2: salvo.atributoPonto2 ?? "",
        options: TRAINING_PHYSICAL_ATTRIBUTE_OPTIONS
      };
    }

    return {
      key,
      ...config,
      etapas,
      bonusCompleto: config.completo,
      completo,
      focoGasto,
      progressoAtual,
      progressoMeta,
      progressoPercentual: progressoPercentual.toFixed(2),
      temAutomacao: etapas.some(etapa => etapa.automatizada) || Boolean(automacao.completo),
      bonusCompletoAutomatizado: Boolean(automacao.completo),
      seletor
    };
  });
}


