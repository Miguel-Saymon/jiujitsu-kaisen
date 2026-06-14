import { executeRoll } from "./roll-service.js";

export function registerDeathSaveRolls(sheet, html) {
  html.find(".jk-rollable-death-save").on("click", async event => {
    event.preventDefault();

    await rollDeathSave(sheet.actor);
  });
}

async function rollDeathSave(actor) {
  await executeRoll({
    actor,
    title: "Salvaguarda de Morte",
    flavor: "Salvaguarda de Morte",
    formula: "1d20"
  });
}
