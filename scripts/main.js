import { JKCharacterSheet } from "./sheets/character-sheet.js";
import { JKItemSheet } from "./sheets/item-sheet.js";

Hooks.once("init", async function () {
  console.log("Jiujitsu Kaisen | Sistema inicializado com sucesso.");

  await loadTemplates([
    "systems/jiujitsu-kaisen/templates/partials/header.hbs",
    "systems/jiujitsu-kaisen/templates/partials/principal.hbs",
    "systems/jiujitsu-kaisen/templates/partials/tecnicas.hbs",
    "systems/jiujitsu-kaisen/templates/partials/combate.hbs",
    "systems/jiujitsu-kaisen/templates/partials/notas.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/description.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/weapon-details.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/weapon-enchantments.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/consumable-details.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/equipment-details.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/equipment-enchantments.hbs"
  ]);

  Handlebars.registerHelper("gte", function (a, b) {
  return Number(a) >= Number(b);
});

  Handlebars.registerHelper("eq", function (a, b) {
    return a === b;
  });

  Actors.unregisterSheet("core", ActorSheet);

  Actors.registerSheet("jiujitsu-kaisen", JKCharacterSheet, {
    types: ["character"],
    makeDefault: true
  });

  Items.unregisterSheet("core", ItemSheet);

  Items.registerSheet("jiujitsu-kaisen", JKItemSheet, {
    types: ["item"],
    makeDefault: true
  });
});


