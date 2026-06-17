import { buildD20Formula, getNumericBonus } from "./roll-utils.js";
import { executeRoll } from "./roll-service.js";

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
  const bonus = getNumericBonus(skill.total);
  const formula = buildD20Formula(bonus);

  await executeRoll({
    actor,
    title: skillName,
    flavor: "Teste de Perícia",
    formula
  });
}

