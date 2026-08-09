import { seedFMTalentos } from "./import/fm-talentos-seeder.js";
import { seedFMLendariasMelhorias } from "./import/fm-lendarias-melhorias-seeder.js";
import { seedFMHabilidadesEspecializacao } from "./import/fm-habilidades-especializacao-seeder.js";
import { seedFMEquipamentos } from "./import/fm-equipamentos-seeder.js";
import { seedFMFeiticos } from "./import/fm-feiticos-seeder.js";
import { seedFMAptidoes } from "./import/fm-aptidoes-seeder.js";
import { seedFMSamples } from "./import/fm-sample-seeder.js";
import { FMConverter } from "./import/fm-converter.js";
import { JKCharacterSheet } from "./sheets/character-sheet.js";
import { JKInvocacaoSheet } from "./sheets/invocacao-sheet.js";
import { JKItemSheet } from "./sheets/item-sheet.js";
import { registerDamageApplicationHooks } from "./rolls/damage-application.js";

Hooks.once("init", async function () {
  console.log("Jiujitsu Kaisen | Sistema inicializado com sucesso.");

  game.jiujitsuKaisen = game.jiujitsuKaisen ?? {};
  game.jiujitsuKaisen.fmConverter = FMConverter;
  game.jiujitsuKaisen.seedFMSamples = seedFMSamples;
  game.jiujitsuKaisen.seedFMAptidoes = seedFMAptidoes;
  game.jiujitsuKaisen.seedFMFeiticos = seedFMFeiticos;
  game.jiujitsuKaisen.seedFMEquipamentos = seedFMEquipamentos;
  game.jiujitsuKaisen.seedFMHabilidadesEspecializacao = seedFMHabilidadesEspecializacao;
  game.jiujitsuKaisen.seedFMLendariasMelhorias = seedFMLendariasMelhorias;
  game.jiujitsuKaisen.seedFMTalentos = seedFMTalentos;

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



Hooks.once("ready", async function () {
  if (!game.user?.isGM) return;

  const sincronizar = async (nome, callback) => {
    try {
      return await callback();
    } catch (error) {
      console.error(`Jiujitsu Kaisen | Falha ao sincronizar ${nome}.`, error);
      ui.notifications?.error(`Jiujitsu Kaisen | Falha ao sincronizar ${nome}. Consulte o console.`);
      return null;
    }
  };

  // Talentos primeiro para que o catálogo final não dependa do sucesso dos demais seeders.
  await sincronizar("Talentos", () => seedFMTalentos({ notify: true }));
  await sincronizar("Aptidões Amaldiçoadas", () => seedFMAptidoes({ notify: true }));
  await sincronizar("Feitiços", () => seedFMFeiticos({ notify: true }));
  await sincronizar("Equipamentos", () => seedFMEquipamentos({ notify: true }));
  await sincronizar("Habilidades de Especialização", () => seedFMHabilidadesEspecializacao({ notify: true }));
  await sincronizar("Habilidades Lendárias e Melhorias Superiores", () => seedFMLendariasMelhorias({ notify: true }));
  await sincronizar("amostras restantes", () => seedFMSamples({ notify: true }));
});

