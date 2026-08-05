import { obterModificadorAtributo } from "../helpers/atributos.js";
import { obterBonusTreino, obterNivel } from "../helpers/proficiencia.js";
import { formatBonus, getNumericBonus } from "./roll-utils.js";

const ROLL_MODE_OPTIONS = {
  publicroll: "Public Roll",
  gmroll: "Private GM Roll",
  blindroll: "Blind GM Roll",
  selfroll: "Self Roll"
};

export async function rollWeaponAttack(actor, itemId) {
  const item = actor?.items?.get(itemId);
  const itemType = ["arma", "equipamento", "consumivel", "tesouro"].includes(item?.type) ? item.type : item?.system?.categoria;

  if (!item || itemType !== "arma") {
    ui.notifications?.warn("Item de arma não encontrado na ficha.");
    return;
  }

  const config = await promptWeaponAttackConfig();
  if (!config) return;

  const weaponName = item.name ?? "Ataque";
  const attackFormula = buildAttackFormula(actor, item, config);
  const criticalConfig = getCriticalConfig(item);

  const attackRoll = await evaluateFormula(attackFormula, actor);
  const naturalD20 = getNaturalD20Result(attackRoll);
  const isCritical = isCriticalHit(naturalD20, criticalConfig.margin);
  const damageFormula = buildDamageFormula(actor, item, config, {
    critical: isCritical,
    multiplier: criticalConfig.multiplier
  });
  const damageRoll = damageFormula ? await evaluateFormula(damageFormula, actor) : null;

  const rolls = damageRoll ? [attackRoll, damageRoll] : [attackRoll];

  await ChatMessage.create(
    {
      speaker: ChatMessage.getSpeaker({ actor }),
      content: await buildCombinedAttackContent({
        actor,
        item,
        weaponName,
        attackRoll,
        damageRoll,
        naturalD20,
        criticalMargin: criticalConfig.margin,
        isCritical,
        hasConsumable: Boolean(item.system?.arma?.consumivel)
      }),
      rolls
    },
    {
      rollMode: config.rollMode || game.settings.get("core", "rollMode")
    }
  );
}

async function promptWeaponAttackConfig() {
  const currentRollMode = game.settings.get("core", "rollMode") || "publicroll";

  const content = `
    <form class="jk-weapon-attack-dialog">
      <div class="form-group">
        <label>Bônus no Teste:</label>
        <input type="text" name="attackBonus" placeholder="ex. +1d4 ou -3" />
      </div>

      <div class="form-group">
        <label>Dano Bônus:</label>
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
    title: "Configuração de ataque",
    content,
    label: "Rolar Ataque",
    callback: html => {
      const form = html[0]?.querySelector("form");
      if (!form) return null;

      return {
        attackBonus: form.attackBonus?.value?.trim() ?? "",
        damageBonus: form.damageBonus?.value?.trim() ?? "",
        d20Mode: form.d20Mode?.value ?? "normal",
        rollMode: form.rollMode?.value ?? currentRollMode
      };
    },
    rejectClose: false
  });
}

async function evaluateFormula(formula, actor) {
  const rollData = typeof actor?.getRollData === "function"
    ? actor.getRollData()
    : actor?.system ?? {};

  return new Roll(formula, rollData).evaluate();
}

function buildAttackFormula(actor, item, config) {
  const dice = getD20Formula(config.d20Mode);
  const attack = item.system?.arma?.ataque ?? {};
  const attackAttribute = normalizeAttribute(attack.atributo) || getDefaultAttackAttribute(item);
  const attributeBonus = obterModificadorAtributo(actor.system, attackAttribute);
  const halfLevel = Math.floor(obterNivel(actor.system) / 2);
  const trainingBonus = obterBonusTreino(actor.system);
  const itemBonus = getNumericBonus(attack.bonus);
  const situationalBonus = normalizeFormulaBonus(config.attackBonus);

  const terms = [dice];

  for (const value of [attributeBonus, halfLevel, trainingBonus, itemBonus]) {
    if (value !== 0) terms.push(formatBonus(value));
  }

  if (situationalBonus) terms.push(situationalBonus);

  return terms.join(" ");
}

function buildDamageFormula(actor, item, config, { critical = false, multiplier = 2 } = {}) {
  const damages = getWeaponDamages(item);
  const terms = [];

  for (const damage of damages) {
    const baseDamage = String(damage.formula ?? "").trim();
    if (!baseDamage) continue;

    const effectiveBaseDamage = critical
      ? multiplyDiceFormula(baseDamage, multiplier)
      : baseDamage;

    const damageAttribute = normalizeAttribute(damage.atributo);
    const attributeBonus = damageAttribute
      ? obterModificadorAtributo(actor.system, damageAttribute)
      : 0;

    terms.push(effectiveBaseDamage);
    if (attributeBonus !== 0) terms.push(formatBonus(attributeBonus));
  }

  const damageBonus = normalizeFormulaBonus(config.damageBonus);
  if (damageBonus) terms.push(damageBonus);

  return normalizeFormulaStart(terms.join(" "));
}

async function buildCombinedAttackContent({
  actor,
  item,
  weaponName,
  attackRoll,
  damageRoll,
  naturalD20,
  criticalMargin,
  isCritical,
  hasConsumable
}) {
  const damageTotal = Number(damageRoll?.total) || 0;
  const doubled = damageTotal * 2;
  const halved = Math.floor(damageTotal / 2);
  const attackState = naturalD20 === 1
    ? "fumble"
    : naturalD20 !== null && naturalD20 >= criticalMargin
      ? "critical"
      : "normal";
  const consumeButton = hasConsumable
    ? `<button type="button" class="jk-spend-ammo-chat" data-actor-id="${escapeHtml(actor.id)}" data-item-id="${escapeHtml(item.id)}">Gastar munição</button>`
    : "";
  const attackRollHtml = await renderNativeRoll(attackRoll, attackState);
  const damageRollHtml = damageRoll ? await renderNativeRoll(damageRoll, "damage") : "";

  return `
    <div class="jk-attack-chat-card">
      <div class="jk-attack-chat-header">
        <img src="${escapeHtml(item.img ?? "icons/svg/sword.svg")}" alt="" />
        <strong>${escapeHtml(weaponName)}</strong>
      </div>

      <div class="jk-chat-roll-group">
        <div class="jk-chat-roll-label">Ataque</div>
        ${attackRollHtml}
      </div>

      ${damageRoll ? `
        <div class="jk-chat-roll-group jk-damage-result-block" data-damage="${damageTotal}">
          <div class="jk-chat-roll-label">${isCritical ? "Dano Crítico" : "Dano"}</div>
          <div class="jk-damage-native-wrap">
            ${damageRollHtml}
            <div class="jk-damage-actions jk-damage-actions-left">
              <button type="button" class="jk-apply-damage" data-damage="${damageTotal}" title="Aplicar dano"><i class="fas fa-user-minus"></i></button>
              <button type="button" class="jk-apply-damage" data-damage="${doubled}" title="Aplicar dano dobrado">2x</button>
            </div>
            <div class="jk-damage-actions jk-damage-actions-right">
              <button type="button" class="jk-apply-damage" data-damage="${halved}" title="Aplicar metade do dano">½</button>
              <button type="button" class="jk-apply-healing" data-healing="${damageTotal}" title="Aplicar cura"><i class="fas fa-user-plus"></i></button>
            </div>
          </div>
        </div>
      ` : ""}

      ${consumeButton}
    </div>
  `;
}

async function renderNativeRoll(roll, resultState) {
  const html = await roll.render();
  return `<div class="jk-native-roll jk-roll-state-${resultState}">${html}</div>`;
}

function getWeaponDamages(item) {
  const damages = item.system?.arma?.danos;
  if (damages && typeof damages === "object" && !Array.isArray(damages)) {
    return Object.values(damages).filter(Boolean);
  }

  const legacyDamage = item.system?.arma?.dano;
  return legacyDamage ? [legacyDamage] : [];
}

function getCriticalConfig(item) {
  const critical = item.system?.arma?.critico ?? {};
  const margin = clampInteger(critical.margem, 20, 1, 20);
  const multiplier = Math.max(1, clampInteger(critical.multiplicador, 2, 1, 10));

  return { margin, multiplier };
}

function isCriticalHit(naturalD20, margin) {
  if (!naturalD20 || naturalD20 === 1) return false;
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
  const valid = ["forca", "destreza", "constituicao", "inteligencia", "sabedoria", "presenca"];
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


