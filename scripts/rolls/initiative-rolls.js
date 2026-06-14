import { buildD20Formula, getNumericBonus } from "./roll-utils.js";
import { executeRoll } from "./roll-service.js";

export function registerInitiativeRolls(sheet, html) {
  html.find(".jk-rollable-initiative").on("click", async event => {
    event.preventDefault();

    await rollInitiative(sheet.actor);
  });
}

async function rollInitiative(actor) {
  const initiative = actor.system.combate?.iniciativa;
  if (!initiative) return;

  const bonus = getNumericBonus(initiative.total);
  const formula = buildD20Formula(bonus);

  await executeRoll({
    actor,
    title: "Iniciativa",
    flavor: "Iniciativa",
    formula
  });
}
