import {
  FM_TALENTOS,
  FM_TALENTOS_FOLDERS,
  FM_TALENTOS_CATALOG_VERSION
} from "./fm-talentos-data.js";

const SYSTEM_ID = "jiujitsu-kaisen";
const PACK_NAME = "talentos";

async function desbloquear(pack) {
  const locked = Boolean(pack.locked ?? pack.metadata?.locked);
  if (locked) await pack.configure({ locked: false });
  return locked;
}

async function garantirPastas(pack) {
  await pack.getIndex({ fields: ["name", "folder"] });
  const folders = pack.folders ? Array.from(pack.folders) : [];
  const byName = new Map(
    folders
      .filter(folder => !(folder.folder?.id ?? folder.folder))
      .map(folder => [String(folder.name ?? "").trim(), folder])
  );

  for (const meta of FM_TALENTOS_FOLDERS) {
    let folder = byName.get(meta.name);
    if (!folder) {
      [folder] = await Folder.createDocuments([{
        name: meta.name,
        type: "Item",
        folder: null,
        color: null,
        sorting: "m",
        sort: meta.sort
      }], { pack: pack.collection });
      byName.set(meta.name, folder);
      continue;
    }

    const update = {};
    if (Number(folder.sort ?? 0) !== Number(meta.sort ?? 0)) update.sort = meta.sort;
    if (folder.sorting !== "m") update.sorting = "m";
    if (Object.keys(update).length) await folder.update(update);
  }

  return byName;
}

export async function seedFMTalentos({ notify = true } = {}) {
  if (!game.user?.isGM) return { created: 0, updated: 0, total: 0 };

  const pack = game.packs.get(`${SYSTEM_ID}.${PACK_NAME}`);
  if (!pack) {
    console.warn("Jiujitsu Kaisen | Compendium Talentos não encontrado.");
    return { created: 0, updated: 0, total: 0 };
  }

  const estavaTravado = await desbloquear(pack);
  let created = 0;
  let updated = 0;

  try {
    const folders = await garantirPastas(pack);
    const index = await pack.getIndex({
      fields: ["name", "folder", "flags.jiujitsu-kaisen.fmCatalogVersion"]
    });
    const byName = new Map(index.map(entry => [String(entry.name ?? "").trim(), entry]));
    const criar = [];
    const atualizar = [];

    for (const source of FM_TALENTOS) {
      const data = foundry.utils.deepClone(source);
      const folderName = data.folderName;
      delete data.folderName;
      data.folder = folders.get(folderName)?.id ?? null;

      const existente = byName.get(data.name);
      if (!existente) {
        criar.push(data);
        continue;
      }

      const version = Number(
        foundry.utils.getProperty(existente, "flags.jiujitsu-kaisen.fmCatalogVersion")
      ) || 0;
      const currentFolder = existente.folder?.id ?? existente.folder ?? null;

      if (version !== FM_TALENTOS_CATALOG_VERSION || currentFolder !== data.folder) {
        const updateData = foundry.utils.deepClone(data);
        delete updateData.type;
        atualizar.push({ _id: existente._id, ...updateData });
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
    if (estavaTravado) await pack.configure({ locked: true });
  }

  if (notify && (created || updated)) {
    ui.notifications?.info(
      `Jiujitsu Kaisen | Talentos sincronizados: ${created} criados, ${updated} atualizados.`
    );
  }

  return { created, updated, total: FM_TALENTOS.length };
}

