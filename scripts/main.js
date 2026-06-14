import { JKCharacterSheet } from "./sheets/character-sheet.js";

Hooks.once("init", async function () {
  console.log("Jiujitsu Kaisen | Sistema inicializado com sucesso.");

  await loadTemplates([
    "systems/jiujitsu-kaisen/templates/partials/header.hbs",
    "systems/jiujitsu-kaisen/templates/partials/principal.hbs",
    "systems/jiujitsu-kaisen/templates/partials/tecnicas.hbs",
    "systems/jiujitsu-kaisen/templates/partials/combate.hbs",
    "systems/jiujitsu-kaisen/templates/partials/notas.hbs"
  ]);

  Handlebars.registerHelper("gte", function (a, b) {
  return Number(a) >= Number(b);
});

  Actors.unregisterSheet("core", ActorSheet);

  Actors.registerSheet("jiujitsu-kaisen", JKCharacterSheet, {
    types: ["character"],
    makeDefault: true
  });
});
