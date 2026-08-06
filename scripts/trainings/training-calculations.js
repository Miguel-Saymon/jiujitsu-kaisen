function etapa(system, treino, numero) {
  return Boolean(system.treinamentos?.[treino]?.etapas?.[`e${numero}`]);
}

function completo(system, treino) {
  return [1, 2, 3, 4].every(n => etapa(system, treino, n));
}

export function calcularBonusTreinamentos(system) {
  const bonus = {
    recursos: { pv: 0, pe: 0, estamina: 0 },
    combate: {
      defesa: 0,
      iniciativa: 0,
      deslocamento: 0,
      resistencias: { reflexos: 0, fortitude: 0 }
    },
    pericias: {},
    aptidoes: { aura: 0, controle: 0, barreira: 0, dominio: 0, reversa: 0 },
    atributos: { forca: 0, destreza: 0, constituicao: 0 }
  };

  const addPericia = (key, valor) => {
    bonus.pericias[key] = (bonus.pericias[key] ?? 0) + valor;
  };

  // Agilidade
  if (etapa(system, "agilidade", 1)) bonus.combate.deslocamento += 1.5;
  if (etapa(system, "agilidade", 2)) addPericia("acrobacia", 2);
  if (etapa(system, "agilidade", 3)) bonus.combate.iniciativa += 2;
  if (etapa(system, "agilidade", 4)) bonus.combate.resistencias.reflexos += 2;
  if (completo(system, "agilidade")) bonus.combate.deslocamento += 4.5;

  // Barreiras
  if (etapa(system, "barreiras", 2)) bonus.aptidoes.barreira += 1;

  // Compreensão
  if (etapa(system, "compreensao", 1)) bonus.recursos.pe += 2;
  if (etapa(system, "compreensao", 2)) { addPericia("feiticaria", 1); addPericia("ocultismo", 1); }
  if (etapa(system, "compreensao", 3)) bonus.recursos.pe += 3;
  if (etapa(system, "compreensao", 4)) { addPericia("feiticaria", 2); addPericia("ocultismo", 2); }
  if (completo(system, "compreensao")) {
    const escolha = system.treinamentos?.compreensao?.aptidaoEscolhida;
    if (escolha && Object.hasOwn(bonus.aptidoes, escolha)) bonus.aptidoes[escolha] += 1;
  }

  // Controle de Energia (efeitos temporários deliberadamente manuais)
  if (etapa(system, "controleEnergia", 1)) bonus.recursos.pe += 2;
  if (etapa(system, "controleEnergia", 3)) bonus.recursos.pe += 3;
  if (etapa(system, "controleEnergia", 4)) bonus.aptidoes.controle += 1;

  // Energia Reversa
  if (etapa(system, "energiaReversa", 2)) bonus.aptidoes.reversa += 1;

  // Luta: apenas Defesa é automática. Manobras e dano desarmado permanecem manuais.
  if (etapa(system, "luta", 2)) bonus.combate.defesa += 2;

  // Potencial Físico: automações só são aplicadas a personagens Restringidos.
  const ehRestringido = (system.progressao?.niveis ?? []).some(nivel => nivel?.especializacao === "restringido");
  if (ehRestringido) {
    if (etapa(system, "potencialFisico", 1)) bonus.recursos.estamina += 2;
    if (etapa(system, "potencialFisico", 2)) {
      for (const campo of ["atributoPonto1", "atributoPonto2"]) {
        const escolha = system.treinamentos?.potencialFisico?.[campo];
        if (escolha && Object.hasOwn(bonus.atributos, escolha)) bonus.atributos[escolha] += 1;
      }
    }
    if (etapa(system, "potencialFisico", 3)) bonus.recursos.estamina += 4;
  }

  // Resistência (dados de vida e efeitos situacionais permanecem manuais)
  if (etapa(system, "resistencia", 1)) bonus.recursos.pv += 4;
  if (etapa(system, "resistencia", 3)) bonus.combate.resistencias.fortitude += 2;
  if (etapa(system, "resistencia", 4)) bonus.recursos.pv += 6;
  if (completo(system, "resistencia")) bonus.recursos.pv += 10;

  return bonus;
}

export function calcularAptidoesEfetivas(system, bonus = calcularBonusTreinamentos(system)) {
  const base = system.tecnicas?.aptidoesEstruturadas ?? {};
  const resultado = {};
  for (const key of ["aura", "controle", "barreira", "dominio", "reversa"]) {
    const valorBase = Number(base[key]) || 0;
    const valorBonus = Number(bonus.aptidoes?.[key]) || 0;
    resultado[key] = { base: valorBase, bonus: valorBonus, total: valorBase + valorBonus };
  }
  return resultado;
}

export function calcularRecursosEfetivos(system, bonus = calcularBonusTreinamentos(system)) {
  const recursos = system.recursos ?? {};
  const resultado = {};

  for (const key of ["pv", "pe", "estamina"]) {
    const base = Number(recursos?.[key]?.max) || 0;
    const valorBonus = Number(bonus.recursos?.[key]) || 0;
    resultado[key] = {
      base,
      bonus: valorBonus,
      total: Math.max(0, base + valorBonus)
    };
  }

  return resultado;
}

export function obterMaximoRecursoEfetivo(system, recurso) {
  return calcularRecursosEfetivos(system)?.[recurso]?.total
    ?? Math.max(0, Number(system.recursos?.[recurso]?.max) || 0);
}


