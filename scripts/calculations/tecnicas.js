import { ATRIBUTOS } from "../constants/atributos.js";
import { obterBonusTreino, obterNivel } from "../helpers/proficiencia.js";

const ATRIBUTOS_VALIDOS = new Set([
  ATRIBUTOS.FORCA,
  ATRIBUTOS.DESTREZA,
  ATRIBUTOS.CONSTITUICAO,
  ATRIBUTOS.INTELIGENCIA,
  ATRIBUTOS.SABEDORIA,
  ATRIBUTOS.PRESENCA
]);

export function calcularPerfilTecnicas(system) {
  const perfil = system.tecnicas?.perfil;
  if (!perfil) return null;

  const atributoPadrao = obterAtributoPadraoDaClasse(system);

  const override = normalizarOverride(perfil.atributoPrincipal);
  const atributoEfetivo = override || atributoPadrao;
  const modificador = Number(system.atributos?.[atributoEfetivo]?.mod) || 0;
  const nivel = obterNivel(system);
  const metadeNivel = Math.floor(nivel / 2);
  const bonusTreino = obterBonusTreino(system);
  const outrosCdTecnica = Number(perfil.cdTecnicaOutros) || 0;
  const outrosCdAmaldicoada = Number(perfil.cdAmaldicoadaOutros) || 0;
  const baseComum = 10 + metadeNivel + modificador + bonusTreino;
  const cdTecnica = baseComum + outrosCdTecnica;
  const cdAmaldicoada = baseComum + outrosCdAmaldicoada;
  const feiticosConhecidos = Array.isArray(system.tecnicas?.feiticosLista)
    ? system.tecnicas.feiticosLista.length
    : 0;

  perfil.atributoPrincipal = override;
  perfil.feiticosConhecidos = feiticosConhecidos;
  perfil.cdTecnicaOutros = outrosCdTecnica;
  perfil.cdAmaldicoadaOutros = outrosCdAmaldicoada;
  perfil.cdTecnica = cdTecnica;
  perfil.cdAmaldicoada = cdAmaldicoada;

  return {
    atributoPadrao,
    atributoOverride: override,
    atributoEfetivo,
    modificador,
    nivel: metadeNivel,
    treino: bonusTreino,
    outrosCdTecnica,
    outrosCdAmaldicoada,
    cdTecnica,
    cdAmaldicoada,
    feiticosConhecidos
  };
}

function obterAtributoPadraoDaClasse(system) {
  const atributoProgressao = normalizarOverride(system.progressao?.atributoInicial);
  if (atributoProgressao) return atributoProgressao;

  const primeiroNivel = Array.isArray(system.progressao?.niveis)
    ? system.progressao.niveis.find(nivel => nivel?.atributoInicial)
    : null;
  const atributoPrimeiroNivel = normalizarOverride(primeiroNivel?.atributoInicial);
  if (atributoPrimeiroNivel) return atributoPrimeiroNivel;

  // Especializações que não registram um atributo próprio mantêm compatibilidade
  // com a escolha de CD da aba Combate, sem que o override de Técnicas a altere.
  return normalizarAtributo(system.combate?.cd?.atributo, ATRIBUTOS.PRESENCA);
}

function normalizarOverride(valor) {
  if (valor === null || valor === undefined || valor === "") return "";
  return normalizarAtributo(valor, "");
}

function normalizarAtributo(valor, fallback) {
  const mapaLegado = {
    for: ATRIBUTOS.FORCA,
    des: ATRIBUTOS.DESTREZA,
    con: ATRIBUTOS.CONSTITUICAO,
    int: ATRIBUTOS.INTELIGENCIA,
    sab: ATRIBUTOS.SABEDORIA,
    pre: ATRIBUTOS.PRESENCA
  };

  const normalizado = mapaLegado[valor] ?? valor;
  return ATRIBUTOS_VALIDOS.has(normalizado) ? normalizado : fallback;
}

