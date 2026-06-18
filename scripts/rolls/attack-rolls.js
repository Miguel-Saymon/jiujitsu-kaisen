import { ATRIBUTOS_LABELS } from "../constants/atributos.js";
import { obterModificadorAtributo } from "../helpers/atributos.js";
import { obterBonusTreino, obterNivel } from "../helpers/proficiencia.js";
import { executeRoll } from "./roll-service.js";
import { formatBonus, getNumericBonus } from "./roll-utils.js";

const ROLL_MODE_OPTIONS = {
  publicroll: "Public Roll",
  gmroll: "Private GM Roll",
  blindroll: "Blind GM Roll",
  selfroll: "Self Roll"
};

export async function rollWeaponAttack(actor, itemId) {
  const item = actor?.items?.get(itemId);

  if (!item || item.system?.categoria !== "arma") {
    ui.notifications?.warn("Item de arma não encontrado na ficha.");
    return;
  }

  const config = await promptWeaponAttackConfig(actor, item);
  if (!config) return;

  const weaponName = item.name ?? "Ataque";
  const attackFormula = buildAttackFormula(actor, item, config);
  const criticalConfig = getCriticalConfig(item);
  const normalDamageFormula = buildDamageFormula(actor, item, config, { critical: false });

  const initialFlavor = buildAttackFlavor({
    weaponName,
    item,
    config,
    attackFormula,
    damageFormula: normalDamageFormula,
    criticalConfig
  });

  const attackRoll = await executeRoll({
    actor,
    title: `Ataque: ${weaponName}`,
    flavor: initialFlavor,
    formula: attackFormula,
    rollMode: config.rollMode
  });

  const naturalD20 = getNaturalD20Result(attackRoll);
  const isCritical = isCriticalHit(naturalD20, criticalConfig.margin);
  const damageFormula = buildDamageFormula(actor, item, config, {
    critical: isCritical,
    multiplier: criticalConfig.multiplier
  });

  if (damageFormula) {
    await executeRoll({
      actor,
      title: `${isCritical ? "Dano Crítico" : "Dano"}: ${weaponName}`,
      flavor: buildDamageFlavor({
        weaponName,
        item,
        config,
        damageFormula,
        naturalD20,
        isCritical,
        criticalConfig
      }),
      formula: damageFormula,
      rollMode: config.rollMode
    });
  }
}

async function promptWeaponAttackConfig(actor, item) {
  const currentRollMode = game.settings.get("core", "rollMode") || "publicroll";
  const attack = item.system?.arma?.ataque ?? {};
  const damage = item.system?.arma?.dano ?? {};
  const defaultAttackAttribute = normalizeAttribute(attack.atributo) || getDefaultAttackAttribute(item);
  const defaultDamageAttribute = normalizeAttribute(damage.atributo) || defaultAttackAttribute;

  const content = `
    <form class="jk-weapon-attack-dialog">
      <div class="form-group">
        <label>Atributo do Ataque:</label>
        <select name="attackAttribute">
          ${buildAttributeOptions(defaultAttackAttribute)}
        </select>
      </div>

      <div class="form-group">
        <label>Atributo do Dano:</label>
        <select name="damageAttribute">
          ${buildAttributeOptions(defaultDamageAttribute)}
        </select>
      </div>

      <div class="form-group">
        <label>Treinado:</label>
        <input type="checkbox" name="trained" ${attack.treinado ? "checked" : ""} />
      </div>

      <div class="form-group">
        <label>Bônus no Teste:</label>
        <input type="text" name="attackBonus" placeholder="ex. +1d4 ou -3" />
      </div>

      <div class="form-group">
        <label>Dano:</label>
        <input type="text" name="damageBonus" placeholder="ex. +1d4 ou -4" />
      </div>

      <div class="form-group">
        <label>Melhor/Pior de 2d20</label>
        <select name="d20Mode">
          <option value="normal">Normal</option>
          <option value="best">Melhor de 2d20</option>
          <option value="worst">Pior de 2d20</option>
        </select>
      </div>

      <div class="form-group">
        <label>Roll Mode</label>
        <select name="rollMode">
          ${Object.entries(ROLL_MODE_OPTIONS)
            .map(([value, label]) => `
              <option value="${value}" ${value === currentRollMode ? "selected" : ""}>
                ${label}
              </option>
            `)
            .join("")}
        </select>
      </div>
    </form>
  `;

  return Dialog.prompt({
    title: `Configuração de ataque: ${item.name ?? "Arma"}`,
    content,
    label: "Rolar Ataque",
    callback: html => {
      const form = html[0]?.querySelector("form");
      if (!form) return null;

      return {
        attackAttribute: normalizeAttribute(form.attackAttribute?.value),
        damageAttribute: normalizeAttribute(form.damageAttribute?.value),
        trained: Boolean(form.trained?.checked),
        attackBonus: form.attackBonus?.value?.trim() ?? "",
        damageBonus: form.damageBonus?.value?.trim() ?? "",
        d20Mode: form.d20Mode?.value ?? "normal",
        rollMode: form.rollMode?.value ?? currentRollMode
      };
    },
    rejectClose: false
  });
}

function buildAttackFormula(actor, item, config) {
  const dice = getD20Formula(config.d20Mode);
  const attributeBonus = obterModificadorAtributo(actor.system, config.attackAttribute);
  const halfLevel = Math.floor(obterNivel(actor.system) / 2);
  const trainingBonus = config.trained ? obterBonusTreino(actor.system) : 0;
  const itemBonus = getNumericBonus(item.system?.arma?.ataque?.bonus);
  const situationalBonus = normalizeFormulaBonus(config.attackBonus);

  const terms = [dice];

  for (const value of [attributeBonus, halfLevel, trainingBonus, itemBonus]) {
    if (value !== 0) terms.push(formatBonus(value));
  }

  if (situationalBonus) terms.push(situationalBonus);

  return terms.join(" ");
}

function buildDamageFormula(actor, item, config, { critical = false, multiplier = 2 } = {}) {
  const baseDamage = String(item.system?.arma?.dano?.formula ?? "").trim();
  const effectiveBaseDamage = critical
    ? multiplyDiceFormula(baseDamage, multiplier)
    : baseDamage;
  const damageBonus = normalizeFormulaBonus(config.damageBonus);
  const damageAttribute = normalizeAttribute(config.damageAttribute);
  const attributeBonus = damageAttribute
    ? obterModificadorAtributo(actor.system, damageAttribute)
    : 0;

  const terms = [];
  if (effectiveBaseDamage) terms.push(effectiveBaseDamage);
  if (attributeBonus !== 0) terms.push(formatBonus(attributeBonus));
  if (damageBonus) terms.push(damageBonus);

  return normalizeFormulaStart(terms.join(" "));
}

function buildAttackFlavor({ weaponName, item, config, attackFormula, damageFormula, criticalConfig }) {
  const attackLabel = ATRIBUTOS_LABELS[config.attackAttribute] ?? config.attackAttribute ?? "-";
  const damageLabel = ATRIBUTOS_LABELS[config.damageAttribute] ?? config.damageAttribute ?? "-";
  const damageType = item.system?.arma?.dano?.tipo ?? "";

  return `
    <div>
      <strong>Ataque: ${escapeHtml(weaponName)}</strong><br>
      Ataque (${escapeHtml(attackLabel)}): ${escapeHtml(attackFormula)}<br>
      Crítico: ${criticalConfig.margin}+ / x${criticalConfig.multiplier}<br>
      ${damageFormula ? `Dano (${escapeHtml(damageLabel)}${damageType ? `, ${escapeHtml(damageType)}` : ""}): ${escapeHtml(damageFormula)}` : "Dano: não configurado"}
    </div>
  `;
}

function buildDamageFlavor({ weaponName, item, config, damageFormula, naturalD20, isCritical, criticalConfig }) {
  const damageLabel = ATRIBUTOS_LABELS[config.damageAttribute] ?? config.damageAttribute ?? "-";
  const damageType = item.system?.arma?.dano?.tipo ?? "";
  const criticalLine = isCritical
    ? `<strong>Crítico!</strong> D20 natural ${naturalD20}. Margem ${criticalConfig.margin}+ / x${criticalConfig.multiplier}.<br>`
    : naturalD20
      ? `D20 natural ${naturalD20}. Crítico em ${criticalConfig.margin}+. <br>`
      : "";

  return `
    <div>
      <strong>${isCritical ? "Dano Crítico" : "Dano"}: ${escapeHtml(weaponName)}</strong><br>
      ${criticalLine}
      Dano (${escapeHtml(damageLabel)}${damageType ? `, ${escapeHtml(damageType)}` : ""}): ${escapeHtml(damageFormula)}<br>
      <button type="button" class="jk-apply-damage">Aplicar Dano</button>
    </div>
  `;
}

function getCriticalConfig(item) {
  const critical = item.system?.arma?.critico ?? {};
  const margin = clampInteger(critical.margem, 20, 1, 20);
  const multiplier = Math.max(1, clampInteger(critical.multiplicador, 2, 1, 10));

  return { margin, multiplier };
}

function isCriticalHit(naturalD20, margin) {
  if (!naturalD20) return false;
  return naturalD20 >= margin;
}

function getNaturalD20Result(roll) {
  const d20 = roll?.dice?.find(die => die.faces === 20);
  if (!d20) return null;

  const activeResults = d20.results?.filter(result => result.active !== false) ?? [];
  const results = activeResults.length ? activeResults : d20.results ?? [];

  return results.reduce((highest, result) => {
    const value = Number(result.result);
    if (!Number.isFinite(value)) return highest;
    return highest === null ? value : Math.max(highest, value);
  }, null);
}

function multiplyDiceFormula(formula, multiplier) {
  const safeMultiplier = Math.max(1, Number(multiplier) || 1);

  if (safeMultiplier === 1) return formula;

  return String(formula ?? "").replace(/(^|[^\w])(?:(\d+))?d(\d+)/gi, (match, prefix, count, faces) => {
    const diceCount = Number(count || 1) * safeMultiplier;
    return `${prefix}${diceCount}d${faces}`;
  });
}

function buildAttributeOptions(selectedAttribute) {
  return Object.entries(ATRIBUTOS_LABELS)
    .map(([value, label]) => `
      <option value="${value}" ${value === selectedAttribute ? "selected" : ""}>
        ${label}
      </option>
    `)
    .join("");
}

function getDefaultAttackAttribute(item) {
  const purpose = item.system?.arma?.proposito;
  if (purpose === "distancia") return "destreza";
  return "forca";
}

function getD20Formula(d20Mode) {
  if (d20Mode === "best") return "2d20kh";
  if (d20Mode === "worst") return "2d20kl";
  return "1d20";
}

function normalizeFormulaStart(formula) {
  return String(formula ?? "")
    .trim()
    .replace(/^\+\s*/, "");
}

function normalizeFormulaBonus(value) {
  const bonus = String(value ?? "").trim();
  if (!bonus) return "";

  if (/^[+-]/.test(bonus)) return bonus;
  return `+ ${bonus}`;
}

function normalizeAttribute(attribute) {
  const valid = Object.keys(ATRIBUTOS_LABELS);
  return valid.includes(attribute) ? attribute : "";
}

function clampInteger(value, fallback, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;

  return Math.min(Math.max(Math.floor(number), min), max);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

