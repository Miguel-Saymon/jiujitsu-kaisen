import { calcularBonusTreinamentos } from "../trainings/training-calculations.js";
import { obterBonusTreino, obterBonusMaestria } from "../helpers/proficiencia.js";
import { calcularAjustePVPorConstituicao } from "../calculations/recursos.js";

const SAVE_DELAY = 140;

export function registerAttributeListener(sheet, html) {
  const timers = new Map();

  const syncDerivedPrincipalTotals = () => {
    const system = sheet.actor.system;

    html.find(".jk-resistencia-row").each((_, rowElement) => {
      const key = rowElement.dataset.resistanceKey;
      if (!key) return;

      const total = Number(system.combate?.testesResistencia?.[key]?.total) || 0;
      const totalElement = rowElement.querySelector(".jk-resistencia-total");
      if (totalElement) totalElement.textContent = formatSigned(total);
    });

    html.find(".jk-skill-row").each((_, rowElement) => {
      const key = rowElement.dataset.skillKey;
      if (!key) return;

      const totalElement = rowElement.querySelector(".jk-skill-total");
      if (totalElement) {
        totalElement.textContent = system.pericias?.[key]?.totalFormatado ?? "+0";
      }
    });

    setText(html, ".jk-defense-total", system.combate?.defesa?.total);
    setText(html, ".jk-attention-total", system.combate?.atencao?.total);
    setText(html, ".jk-initiative-total", system.combate?.iniciativa?.total);
    setText(html, ".jk-cd-total", system.combate?.cd?.total);
  };

  const recalculateAfterUpdate = () => {
    if (typeof sheet.recalcularDadosDerivados === "function") {
      sheet.recalcularDadosDerivados();
    }
    syncDerivedPrincipalTotals();
  };

  const scheduleUpdate = (path, value, immediate = false) => {
    const previous = timers.get(path);
    if (previous) clearTimeout(previous);

    const save = async () => {
      timers.delete(path);
      await sheet.actor.update({ [path]: value }, { render: false });
      recalculateAfterUpdate();
    };

    if (immediate) {
      void save();
      return;
    }

    timers.set(path, setTimeout(save, SAVE_DELAY));
  };

  const refreshSkillTotals = () => {
    const bonusTreinos = calcularBonusTreinamentos(sheet.actor.system);
    const metadeNivel = Math.floor((Number(sheet.actor.system.info?.nivel) || 0) / 2);

    const attrMods = obterModificadoresAtributosConfirmados(sheet.actor.system);

    html.find(".jk-skill-row").each((_, rowElement) => {
      const row = rowElement;
      const key = row.dataset.skillKey;
      if (!key) return;

      const attribute = row.querySelector(".jk-skill-attribute")?.value ?? "";
      const trained = Boolean(row.querySelector(".jk-skill-trained")?.checked);
      const mastery = Boolean(row.querySelector(".jk-skill-mastery")?.checked);
      const others = Number(row.querySelector(".jk-skill-others")?.value) || 0;

      const proficiency = mastery
        ? obterBonusMaestria(sheet.actor.system)
        : trained
          ? obterBonusTreino(sheet.actor.system)
          : 0;

      const trainingBonus = Number(bonusTreinos.pericias?.[key]) || 0;
      const total =
        (Number(attrMods[attribute]) || 0) +
        metadeNivel +
        proficiency +
        others +
        trainingBonus;

      const totalElement = row.querySelector(".jk-skill-total");
      if (totalElement) totalElement.textContent = formatSigned(total);
    });
  };

  // Atributos só são confirmados ao pressionar Enter.
  // Digitar ou sair do campo não altera nenhum valor derivado.
  html.find(".jk-training-derived-attribute").on("keydown", async event => {
    if (event.key !== "Enter") return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const input = event.currentTarget;
    const atributo = input.dataset.attribute;
    const path = input.dataset.path;
    if (!atributo || !path) return;

    const bonus =
      Number(calcularBonusTreinamentos(sheet.actor.system).atributos?.[atributo]) || 0;

    const totalDigitado = Number(input.value);
    if (!Number.isFinite(totalDigitado)) {
      restaurarAtributoConfirmado(sheet.actor.system, input, atributo);
      return;
    }

    const valorBase = totalDigitado - bonus;

    await atualizarAtributoBase(sheet.actor, atributo, path, valorBase);

    // Um único pipeline recalcula tudo que depende dos atributos antes
    // de qualquer nova rolagem usar actor.system.
    if (typeof sheet.recalcularDadosDerivados === "function") {
      sheet.recalcularDadosDerivados();
    }

    // O Enter é uma confirmação explícita; um render completo neste ponto
    // garante que Defesa, Atenção, Iniciativa, Resistências, CD e Carga
    // exibam exatamente os mesmos valores que serão usados nas rolagens.
    if (typeof sheet.renderPreservandoEstado === "function") {
      sheet.renderPreservandoEstado(html);
    } else {
      sheet.render(false);
    }
  });

  // Se o jogador sair do campo sem Enter, descarta apenas a edição visual.
  html.find(".jk-training-derived-attribute").on("blur", event => {
    const input = event.currentTarget;
    const atributo = input.dataset.attribute;
    if (!atributo) return;
    restaurarAtributoConfirmado(sheet.actor.system, input, atributo);
  });

  html.find(".jk-skill-attribute").on("change", event => {
    event.preventDefault();
    event.stopImmediatePropagation();

    const select = event.currentTarget;
    const row = select.closest(".jk-skill-row");
    const key = row?.dataset.skillKey;
    if (!key) return;

    refreshSkillTotals();
    scheduleUpdate(`system.pericias.${key}.atributo`, select.value, true);
  });

  html.find(".jk-skill-trained").on("change", event => {
    event.preventDefault();
    event.stopImmediatePropagation();

    const checkbox = event.currentTarget;
    const row = checkbox.closest(".jk-skill-row");
    const key = row?.dataset.skillKey;
    if (!key) return;

    // Uma perícia Mestre também é, necessariamente, Treinada.
    const mastery = row.querySelector(".jk-skill-mastery");
    if (!checkbox.checked && mastery?.checked) {
      mastery.checked = false;
      scheduleUpdate(`system.pericias.${key}.maestria`, false, true);
    }

    refreshSkillTotals();
    scheduleUpdate(`system.pericias.${key}.treinado`, checkbox.checked, true);
  });

  html.find(".jk-skill-mastery").on("change", event => {
    event.preventDefault();
    event.stopImmediatePropagation();

    const checkbox = event.currentTarget;
    const row = checkbox.closest(".jk-skill-row");
    const key = row?.dataset.skillKey;
    if (!key) return;

    const trained = row.querySelector(".jk-skill-trained");
    if (checkbox.checked && trained && !trained.checked) {
      trained.checked = true;
      scheduleUpdate(`system.pericias.${key}.treinado`, true, true);
    }

    refreshSkillTotals();
    scheduleUpdate(`system.pericias.${key}.maestria`, checkbox.checked, true);
  });

  html.find(".jk-skill-others").on("input change", event => {
    event.preventDefault();
    event.stopImmediatePropagation();

    const input = event.currentTarget;
    const row = input.closest(".jk-skill-row");
    const key = row?.dataset.skillKey;
    if (!key) return;

    const value = Number(input.value) || 0;
    refreshSkillTotals();
    scheduleUpdate(`system.pericias.${key}.outros`, value, event.type === "change");
  });

  // A primeira renderização já vem calculada pelo pipeline da sheet.
  syncDerivedPrincipalTotals();
}

async function atualizarAtributoBase(actor, atributoAlterado, path, novoValor) {
  const system = actor.system;
  const atributoInicial = system.progressao?.atributoInicial;

  const updateData = {
    [path]: novoValor
  };

  // Constituição participa do PV ganho em cada nível. Como atributos só são
  // confirmados com Enter, este é o ponto único em que sincronizamos essa
  // cadeia: histórico de níveis -> PV máximo -> Integridade máxima.
  if (atributoAlterado === "constituicao") {
    const bonusConTreinamento =
      Number(calcularBonusTreinamentos(system).atributos?.constituicao) || 0;
    const valorEfetivoNovo = novoValor + bonusConTreinamento;
    const modConNovo = Math.floor((valorEfetivoNovo - 10) / 2);

    const { diferencaPV, niveis } = calcularAjustePVPorConstituicao(
      system,
      modConNovo
    );

    if (niveis.length) {
      updateData["system.progressao.niveis"] = niveis;
    }

    if (diferencaPV !== 0) {
      const pvMaxAnterior = Number(system.recursos?.pv?.max) || 0;
      const pvAtualAnterior = Number(system.recursos?.pv?.atual) || 0;
      const pvMaxNovo = Math.max(0, pvMaxAnterior + diferencaPV);

      updateData["system.recursos.pv.max"] = pvMaxNovo;
      updateData["system.recursos.pv.atual"] = Math.min(
        Math.max(0, pvAtualAnterior),
        pvMaxNovo
      );

      const integridadeMaxAnterior =
        Number(system.recursos?.integridade?.max) || 0;
      const integridadeAtualAnterior =
        Number(system.recursos?.integridade?.atual) || 0;
      const integridadeMaxNova = Math.max(
        0,
        integridadeMaxAnterior + diferencaPV
      );

      updateData["system.recursos.integridade.max"] = integridadeMaxNova;
      updateData["system.recursos.integridade.atual"] = Math.min(
        Math.max(0, integridadeAtualAnterior),
        integridadeMaxNova
      );
    }
  }

  // Mantém compatibilidade com a regra existente de atributo inicial que
  // influencia PE. O cálculo continua usando o valor-base persistido.
  if (atributoInicial && atributoAlterado === atributoInicial) {
    const bonusAnterior = Number(system.progressao?.bonusAtributoInicial) || 0;
    const bonusNovo = Math.floor((novoValor - 10) / 2);
    const diferenca = bonusNovo - bonusAnterior;

    if (diferenca !== 0) {
      const peAtual = Number(system.recursos?.pe?.atual) || 0;
      const peMax = Number(system.recursos?.pe?.max) || 0;

      updateData["system.recursos.pe.atual"] = Math.max(0, peAtual + diferenca);
      updateData["system.recursos.pe.max"] = Math.max(0, peMax + diferenca);
      updateData["system.progressao.bonusAtributoInicial"] = bonusNovo;
    }
  }

  await actor.update(updateData, { render: false });
}

function obterModificadoresAtributosConfirmados(system) {
  const resultado = {};

  for (const [key, atributo] of Object.entries(system.atributos ?? {})) {
    resultado[key] = Number(atributo?.mod) || 0;
  }

  return resultado;
}

function restaurarAtributoConfirmado(system, input, atributo) {
  const valor = Number(system.atributos?.[atributo]?.valorEfetivo);
  input.value = Number.isFinite(valor) ? String(valor) : "0";
}

function setText(html, selector, value) {
  const numero = Number(value) || 0;
  html.find(selector).text(numero);
}

function formatSigned(value) {
  const numero = Number(value) || 0;
  return numero >= 0 ? `+${numero}` : `${numero}`;
}


