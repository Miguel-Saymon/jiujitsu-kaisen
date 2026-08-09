import { JKCharacterSheet } from "./sheets/character-sheet.js";
import { JKInvocacaoSheet } from "./sheets/invocacao-sheet.js";
import { JKItemSheet } from "./sheets/item-sheet.js";
import { registerDamageApplicationHooks } from "./rolls/damage-application.js";

Hooks.once("init", async function () {
  console.log("Jiujitsu Kaisen | Sistema inicializado com sucesso.");

  game.jiujitsuKaisen = game.jiujitsuKaisen ?? {};

  await loadTemplates([
    "systems/jiujitsu-kaisen/templates/partials/header.hbs",
    "systems/jiujitsu-kaisen/templates/partials/principal.hbs",
    "systems/jiujitsu-kaisen/templates/partials/tecnicas.hbs",
    "systems/jiujitsu-kaisen/templates/partials/combate.hbs",
    "systems/jiujitsu-kaisen/templates/partials/treinamentos.hbs",
    "systems/jiujitsu-kaisen/templates/partials/votos.hbs",
    "systems/jiujitsu-kaisen/templates/partials/notas.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/description.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/weapon-details.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/weapon-enchantments.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/consumable-details.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/equipment-details.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/equipment-enchantments.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/ability-details.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/spell-details.hbs",
    "systems/jiujitsu-kaisen/templates/items/partials/action-details.hbs"
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

  Actors.registerSheet("jiujitsu-kaisen", JKInvocacaoSheet, {
    types: ["invocacao"],
    makeDefault: true
  });

  Items.unregisterSheet("core", ItemSheet);

  Items.registerSheet("jiujitsu-kaisen", JKItemSheet, {
    types: ["item", "arma", "consumivel", "equipamento", "tesouro", "habilidade", "feitico", "acao"],
    makeDefault: true
  });

  registerDamageApplicationHooks();
});




function renderizarActorPaiDoItem(item) {
  const actor = item?.parent;
  if (!actor || actor.documentName !== "Actor") return;
  if (!["habilidade", "feitico", "acao"].includes(item.type)) return;

  for (const app of Object.values(actor.apps ?? {})) {
    if (app?.rendered) app.render(false);
  }
}

Hooks.on("updateItem", (item) => {
  renderizarActorPaiDoItem(item);
});

Hooks.on("createItem", (item) => {
  renderizarActorPaiDoItem(item);
});

Hooks.on("deleteItem", (item) => {
  renderizarActorPaiDoItem(item);
});

