import { getNumericBonus, formatBonus } from "./roll-utils.js";

const ROLL_MODE_OPTIONS = {
  publicroll: "Public Roll",
  gmroll: "Private GM Roll",
  blindroll: "Blind GM Roll",
  selfroll: "Self Roll"
};

export function registerSkillRolls(sheet, html) {
  html.find(".jk-rollable-skill").on("click", async event => {
    const interactiveElement = event.target.closest("input, select, textarea, button, option");
    if (interactiveElement) return;

    event.preventDefault();

    const skillKey = event.currentTarget.dataset.skillKey;
    if (!skillKey) return;

    await rollSkill(sheet.actor, skillKey);
  });
}

async function rollSkill(actor, skillKey) {
  const skill = actor.system.pericias?.[skillKey];
  if (!skill) return;

  const skillName = skill.customNome || skill.nome || skillKey;
  const baseBonus = getNumericBonus(skill.total);

  const config = await promptSkillRollConfig(skillName);
  if (!config) return;

  const formula = buildSkillFormula({
    baseBonus,
    situationalBonus: config.bonus,
    d20Mode: config.d20Mode
  });

  const roll = await evaluateFormula(formula, actor);
  const naturalD20 = getNaturalD20Result(roll);
  const resultState = naturalD20 === 1
    ? "fumble"
    : naturalD20 === 20
      ? "critical"
      : "normal";

  const nativeRollHtml = await renderNativeRoll(roll, resultState);

  await ChatMessage.create(
    {
      speaker: ChatMessage.getSpeaker({ actor }),
      flavor: skillName,
      content: `<div class="jk-skill-chat-card">${nativeRollHtml}</div>`,
      rolls: [roll]
    },
    {
      rollMode: config.rollMode || game.settings.get("core", "rollMode")
    }
  );
}

async function promptSkillRollConfig(skillName) {
  const currentRollMode = game.settings.get("core", "rollMode") || "publicroll";

  const content = `
    <form class="jk-skill-roll-dialog">
      <div class="form-group">
        <label>Bônus no Teste:</label>
        <input type="text" name="bonus" placeholder="ex. +1d4 ou -3" />
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
    title: `Configuração de uso de perícia: ${skillName}`,
    content,
    label: "Rolar",
    callback: html => {
      const form = html[0]?.querySelector("form");
      if (!form) return null;

      return {
        bonus: form.bonus?.value?.trim() ?? "",
        d20Mode: form.d20Mode?.value ?? "normal",
        rollMode: form.rollMode?.value ?? currentRollMode
      };
    },
    rejectClose: false
  });
}

function buildSkillFormula({ baseBonus, situationalBonus, d20Mode }) {
  const dice = getD20Formula(d20Mode);
  const terms = [dice];

  if (baseBonus !== 0) {
    terms.push(formatBonus(baseBonus));
  }

  const extra = normalizeSituationalBonus(situationalBonus);
  if (extra) {
    terms.push(extra);
  }

  return terms.join(" ");
}

function getD20Formula(d20Mode) {
  if (d20Mode === "best") return "2d20kh";
  if (d20Mode === "worst") return "2d20kl";

  return "1d20";
}

function normalizeSituationalBonus(value) {
  const bonus = String(value ?? "").trim();
  if (!bonus) return "";

  if (/^[+-]/.test(bonus)) {
    return bonus;
  }

  return `+ ${bonus}`;
}

async function evaluateFormula(formula, actor) {
  const rollData = typeof actor?.getRollData === "function"
    ? actor.getRollData()
    : actor?.system ?? {};

  return new Roll(formula, rollData).evaluate();
}

async function renderNativeRoll(roll, resultState) {
  const html = await roll.render();
  return `<div class="jk-native-roll jk-roll-state-${resultState}">${html}</div>`;
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

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

