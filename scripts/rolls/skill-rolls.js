import { buildD20Formula, getNumericBonus, formatBonus } from "./roll-utils.js";
import { executeRoll } from "./roll-service.js";

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

  await executeRoll({
    actor,
    title: skillName,
    flavor: skillName,
    formula,
    rollMode: config.rollMode
  });
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

