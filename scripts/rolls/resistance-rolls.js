import { buildD20Formula, getNumericBonus } from "./roll-utils.js";
import { executeRoll } from "./roll-service.js";

export function registerResistanceRolls(sheet, html) {
  html.find(".jk-rollable-resistance").on("click", async event => {
    event.preventDefault();

    const resistanceKey = event.currentTarget.dataset.resistanceKey;
    if (!resistanceKey) return;

    await rollResistance(sheet.actor, resistanceKey);
  });
}

async function rollResistance(actor, resistanceKey) {
  const resistance = actor.system.combate?.testesResistencia?.[resistanceKey];
  if (!resistance) return;

  const resistanceName = resistanceKey.charAt(0).toUpperCase() + resistanceKey.slice(1);
  const bonus = getNumericBonus(resistance.total);
  const formula = buildD20Formula(bonus);

  await executeRoll({
    actor,
    title: resistanceName,
    flavor: "Teste de Resistência",
    formula
  });
}
