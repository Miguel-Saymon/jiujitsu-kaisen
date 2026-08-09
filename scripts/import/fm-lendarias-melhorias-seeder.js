import {
  FM_HABILIDADES_LENDARIAS,
  FM_HABILIDADES_LENDARIAS_CATALOG_VERSION
} from "./fm-habilidades-lendarias-data.js";
import {
  FM_MELHORIAS_SUPERIORES,
  FM_MELHORIAS_SUPERIORES_CATALOG_VERSION
} from "./fm-melhorias-superiores-data.js";

const SYSTEM_ID = "jiujitsu-kaisen";

async function syncPack(packName, items, version) {
  const pack = game.packs.get(`${SYSTEM_ID}.${packName}`);
  if (!pack) {
    console.warn(`Jiujitsu Kaisen | Compendium não encontrado: ${packName}`);
    return { created: 0, updated: 0, total: 0 };
  }

  const locked = Boolean(pack.locked ?? pack.metadata?.locked);
  if (locked) await pack.configure({ locked: false });

  let created = 0;
  let updated = 0;
  try {
    const index = await pack.getIndex({
      fields: ["name", "flags.jiujitsu-kaisen.fmCatalogVersion"]
    });
    const byName = new Map(index.map(entry => [String(entry.name ?? "").trim(), entry]));
    const criar = [];
    const atualizar = [];

    for (const source of items) {
      const data = foundry.utils.deepClone(source);
      const existente = byName.get(data.name);
      if (!existente) {
        criar.push(data);
        continue;
      }

      const currentVersion = Number(
        foundry.utils.getProperty(existente, "flags.jiujitsu-kaisen.fmCatalogVersion")
      ) || 0;

      if (currentVersion !== version) {
        {
        const updateData = foundry.utils.deepClone(data);
        delete updateData.type;
        atualizar.push({ _id: existente._id, ...updateData });
      }
      }
    }

    if (criar.length) {
      await Item.createDocuments(criar, { pack: pack.collection });
      created = criar.length;
    }
    if (atualizar.length) {
      await Item.updateDocuments(atualizar, { pack: pack.collection });
      updated = atualizar.length;
    }
  } finally {
    if (locked) await pack.configure({ locked: true });
  }

  return { created, updated, total: items.length };
}

export async function seedFMLendariasMelhorias({ notify = true } = {}) {
  if (!game.user?.isGM) return {};

  const lendarias = await syncPack(
    "habilidades-lendarias",
    FM_HABILIDADES_LENDARIAS,
    FM_HABILIDADES_LENDARIAS_CATALOG_VERSION
  );
  const melhorias = await syncPack(
    "melhorias-superiores",
    FM_MELHORIAS_SUPERIORES,
    FM_MELHORIAS_SUPERIORES_CATALOG_VERSION
  );

  if (notify && (lendarias.created || lendarias.updated || melhorias.created || melhorias.updated)) {
    ui.notifications?.info(
      `Jiujitsu Kaisen | Habilidades Lendárias: ${lendarias.created} criadas, ${lendarias.updated} atualizadas. ` +
      `Melhorias Superiores: ${melhorias.created} criadas, ${melhorias.updated} atualizadas.`
    );
  }

  return { lendarias, melhorias };
}

