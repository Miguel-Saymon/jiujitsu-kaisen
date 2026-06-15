import { obterNivel, obterBonusTreino, obterBonusMaestria } from "../helpers/proficiencia.js";
import { ATRIBUTOS } from "../constants/atributos.js";

export function calcularCombate(system) {
  const nivel = obterNivel(system);

  const atributoDefesa =
    system.combate?.defesa?.atributo ?? ATRIBUTOS.DESTREZA;

  const modDefesa =
    Number(system.atributos?.[atributoDefesa]?.mod) || 0;

  const modDestreza =
    Number(system.atributos?.[ATRIBUTOS.DESTREZA]?.mod) || 0;

  calcularDefesa(system, modDefesa, nivel);
  calcularAtencao(system);
  calcularIniciativa(system, modDestreza);
  calcularTestesResistencia(system, nivel);
  calcularCdEspecializacao(system, nivel);

  return system.combate;
}

function calcularDefesa(system, modDefesa, nivel) {
  const defesa = system.combate?.defesa;

  if (!defesa) return;

  const metadeNivel = Math.floor(nivel / 2);
  const equipamentos = Number(defesa.equipamentos) || 0;
  const outros = Number(defesa.outros) || 0;

  defesa.base = 10;
  defesa.nivel = metadeNivel;
  defesa.total = defesa.base + modDefesa + defesa.nivel + equipamentos + outros;
}

function calcularAtencao(system) {
  const atencao = system.combate?.atencao;

  if (!atencao) return;

  const base = 10;
  const percepcao = Number(system.pericias?.percepcao?.total) || 0;
  const outros = Number(atencao.outros) || 0;

  atencao.base = base;
  atencao.percepcao = percepcao;
  atencao.total = base + percepcao + outros;
}

function calcularIniciativa(system, modDestreza) {
  const iniciativa = system.combate?.iniciativa;

  if (!iniciativa) return;

  const outros = Number(iniciativa.outros) || 0;

  iniciativa.atributo = modDestreza;
  iniciativa.total = iniciativa.atributo + outros;
}

function calcularTestesResistencia(system, nivel) {
  const testes = system.combate?.testesResistencia;

  if (!testes) return;

  const metadeNivel = Math.floor(nivel / 2);

  const configuracao = {
    astucia: ATRIBUTOS.INTELIGENCIA,
    fortitude: ATRIBUTOS.CONSTITUICAO,
    integridade: ATRIBUTOS.CONSTITUICAO,
    reflexos: ATRIBUTOS.DESTREZA,
    vontade: ATRIBUTOS.SABEDORIA
  };

  for (const [key, atributo] of Object.entries(configuracao)) {
    const teste = testes[key];

    if (!teste) continue;

    const modificadorAtributo =
      Number(system.atributos?.[atributo]?.mod) || 0;

const bonusTreino =
  teste.treino ? obterBonusTreino(system) : 0;

const bonusMaestria =
  teste.maestria ? obterBonusMaestria(system) : 0;

const outros = Number(teste.outros) || 0;

teste.atributo = modificadorAtributo;
teste.nivel = metadeNivel;
teste.bonusTreino = bonusTreino;
teste.bonusMaestria = bonusMaestria;

teste.total =
  modificadorAtributo +
  metadeNivel +
  bonusTreino +
  bonusMaestria +
  outros;
  }
}


function calcularCdEspecializacao(system, nivel) {
  const cd = system.combate?.cd;

  if (!cd) return;

  const atributoSelecionado = normalizarAtributoCd(cd.atributo);
  const modificadorAtributo = Number(system.atributos?.[atributoSelecionado]?.mod) || 0;
  const bonusTreino = obterBonusTreino(system);
  const metadeNivel = Math.floor(nivel / 2);
  const outros = Number(cd.outros) || 0;

  cd.base = 10;
  cd.atributo = atributoSelecionado;
  cd.atributoBonus = modificadorAtributo;
  cd.treino = bonusTreino;
  cd.nivel = metadeNivel;
  cd.total = cd.base + modificadorAtributo + bonusTreino + metadeNivel + outros;
}

function normalizarAtributoCd(atributo) {
  const mapaLegado = {
    for: ATRIBUTOS.FORCA,
    des: ATRIBUTOS.DESTREZA,
    con: ATRIBUTOS.CONSTITUICAO,
    int: ATRIBUTOS.INTELIGENCIA,
    sab: ATRIBUTOS.SABEDORIA,
    pre: ATRIBUTOS.PRESENCA
  };

  return mapaLegado[atributo] ?? atributo ?? ATRIBUTOS.PRESENCA;
}

