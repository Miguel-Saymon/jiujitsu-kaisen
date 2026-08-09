import {
  FM_HABILIDADES_ESPECIALIZACAO,
  FM_HABILIDADES_ESPECIALIZACAO_FOLDERS,
  FM_HABILIDADES_ESPECIALIZACAO_CATALOG_VERSION
} from "./fm-habilidades-especializacao-data.js";

const SYSTEM_ID = "jiujitsu-kaisen";
const PACK_NAME = "habilidades-especializacao";

async function desbloquear(pack) {
  const locked = Boolean(pack.locked ?? pack.metadata?.locked);
  if (locked) await pack.configure({ locked: false });
  return locked;
}

function pathKey(path) {
  return path.join(" / ");
}

async function garantirPastas(pack) {
  await pack.getIndex({ fields: ["name", "folder"] });
  let folders = pack.folders ? Array.from(pack.folders) : [];
  const byPath = new Map();

  const resolvePath = folder => {
    const parts = [folder.name];
    let parentId = folder.folder?.id ?? folder.folder ?? null;
    const seen = new Set([folder.id]);
    while (parentId && !seen.has(parentId)) {
      seen.add(parentId);
      const parent = folders.find(f => f.id === parentId);
      if (!parent) break;
      parts.unshift(parent.name);
      parentId = parent.folder?.id ?? parent.folder ?? null;
    }
    return parts;
  };

  for (const folder of folders) byPath.set(pathKey(resolvePath(folder)), folder);

  const metas = [...FM_HABILIDADES_ESPECIALIZACAO_FOLDERS]
    .sort((a, b) => a.path.length - b.path.length || a.sort - b.sort);

  for (const meta of metas) {
    const key = pathKey(meta.path);
    let folder = byPath.get(key);
    const parent = meta.parentPath ? byPath.get(pathKey(meta.parentPath)) : null;

    if (!folder) {
      [folder] = await Folder.createDocuments([{
        name: meta.name,
        type: "Item",
        folder: parent?.id ?? null,
        color: null,
        sorting: meta.sorting ?? "m",
        sort: meta.sort ?? 0
      }], { pack: pack.collection });
      byPath.set(key, folder);
    } else {
      const update = {};
      const desiredParent = parent?.id ?? null;
      const currentParent = folder.folder?.id ?? folder.folder ?? null;
      if (currentParent !== desiredParent) update.folder = desiredParent;
      if (Number(folder.sort ?? 0) !== Number(meta.sort ?? 0)) update.sort = meta.sort ?? 0;
      if (folder.sorting !== (meta.sorting ?? "m")) update.sorting = meta.sorting ?? "m";
      if (Object.keys(update).length) await folder.update(update);
    }
  }
  return byPath;
}

export async function seedFMHabilidadesEspecializacao({ notify = true } = {}) {
  if (!game.user?.isGM) return { created: 0, updated: 0, total: 0 };

  const pack = game.packs.get(`${SYSTEM_ID}.${PACK_NAME}`);
  if (!pack) {
    console.warn("Jiujitsu Kaisen | Compendium Habilidades de Especialização não encontrado.");
    return { created: 0, updated: 0, total: 0 };
  }

  const estavaTravado = await desbloquear(pack);
  let created = 0;
  let updated = 0;

  try {
    const folders = await garantirPastas(pack);
    const index = await pack.getIndex({
      fields: ["name", "folder", "flags.jiujitsu-kaisen.catalogKey", "flags.jiujitsu-kaisen.fmCatalogVersion"]
    });

    const byKey = new Map();
    const byName = new Map();
    for (const entry of index) {
      const key = foundry.utils.getProperty(entry, "flags.jiujitsu-kaisen.catalogKey");
      if (key) byKey.set(key, entry);
      const name = String(entry.name ?? "").trim();
      if (!byName.has(name)) byName.set(name, []);
      byName.get(name).push(entry);
    }

    const targetNameCount = new Map();
    for (const item of FM_HABILIDADES_ESPECIALIZACAO) {
      targetNameCount.set(item.name, (targetNameCount.get(item.name) ?? 0) + 1);
    }

    const claimed = new Set();
    const criar = [];
    const atualizar = [];

    for (const source of FM_HABILIDADES_ESPECIALIZACAO) {
      const data = foundry.utils.deepClone(source);
      const path = data.folderPath;
      delete data.folderPath;
      data.folder = folders.get(pathKey(path))?.id ?? null;

      const catalogKey = foundry.utils.getProperty(data, "flags.jiujitsu-kaisen.catalogKey");
      let existente = byKey.get(catalogKey);

      // Reuse old sample items only when the name is unique in this catalog.
      if (!existente && targetNameCount.get(data.name) === 1) {
        existente = (byName.get(data.name) ?? []).find(e => !claimed.has(e._id));
      }

      if (!existente) {
        criar.push(data);
        continue;
      }

      claimed.add(existente._id);
      const version = Number(foundry.utils.getProperty(existente, "flags.jiujitsu-kaisen.fmCatalogVersion")) || 0;
      const currentFolder = existente.folder?.id ?? existente.folder ?? null;
      if (version !== FM_HABILIDADES_ESPECIALIZACAO_CATALOG_VERSION || currentFolder !== data.folder) {
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
    if (estavaTravado) await pack.configure({ locked: true });
  }

  if (notify && (created || updated)) {
    ui.notifications?.info(
      `Jiujitsu Kaisen | Habilidades de Especialização sincronizadas: ${created} criadas, ${updated} atualizadas.`
    );
  }
  return { created, updated, total: FM_HABILIDADES_ESPECIALIZACAO.length };
}

