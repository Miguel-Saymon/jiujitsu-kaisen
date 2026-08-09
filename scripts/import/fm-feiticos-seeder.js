import { FM_FEITICOS, FM_FEITICOS_FOLDERS, FM_FEITICOS_CATALOG_VERSION } from "./fm-feiticos-data.js";

const SYSTEM_ID = "jiujitsu-kaisen";
const PACK_NAME = "feiticos";
const AMOSTRAS_ANTIGAS_NAO_CATALOGADAS = new Set([
  "Escudo Definitivo",
  "Acúmulo de Velocidade",
  "Reflexos Apurados"
]);

async function desbloquear(pack) {
  const locked = Boolean(pack.locked ?? pack.metadata?.locked);
  if (locked) await pack.configure({ locked: false });
  return locked;
}

async function garantirPastas(pack) {
  await pack.getIndex({ fields: ["name", "folder"] });
  let allFolders = pack.folders ? Array.from(pack.folders) : [];
  const roots = new Map(
    allFolders
      .filter(folder => !(folder.folder?.id ?? folder.folder))
      .map(folder => [String(folder.name ?? "").trim(), folder])
  );

  for (const meta of FM_FEITICOS_FOLDERS.filter(entry => !entry.parent)) {
    let folder = roots.get(meta.name);
    if (!folder) {
      [folder] = await Folder.createDocuments([{
        name: meta.name,
        type: "Item",
        folder: null,
        color: meta.color ?? null,
        sorting: "m",
        sort: meta.sort
      }], { pack: pack.collection });
      roots.set(meta.name, folder);
    } else {
      const update = {};
      if ((folder.color ?? null) !== (meta.color ?? null)) update.color = meta.color ?? null;
      if (Number(folder.sort ?? 0) !== Number(meta.sort ?? 0)) update.sort = meta.sort;
      if (folder.sorting !== "m") update.sorting = "m";
      if (Object.keys(update).length) await folder.update(update);
    }
  }

  allFolders = pack.folders ? Array.from(pack.folders) : [];
  const children = new Map();
  for (const folder of allFolders) {
    const parentId = folder.folder?.id ?? folder.folder ?? null;
    if (!parentId) continue;
    const parent = allFolders.find(candidate => candidate.id === parentId);
    if (parent) children.set(`${parent.name}::${folder.name}`, folder);
  }

  for (const meta of FM_FEITICOS_FOLDERS.filter(entry => entry.parent)) {
    const parent = roots.get(meta.parent);
    if (!parent) continue;
    const key = `${meta.parent}::${meta.name}`;
    let folder = children.get(key);

    if (!folder) {
      [folder] = await Folder.createDocuments([{
        name: meta.name,
        type: "Item",
        folder: parent.id,
        color: null,
        sorting: "m",
        sort: meta.sort
      }], { pack: pack.collection });
      children.set(key, folder);
    } else {
      const update = {};
      if (Number(folder.sort ?? 0) !== Number(meta.sort ?? 0)) update.sort = meta.sort;
      if (folder.sorting !== "m") update.sorting = "m";
      if (Object.keys(update).length) await folder.update(update);
    }
  }

  return children;
}

export async function seedFMFeiticos({ notify = true } = {}) {
  if (!game.user?.isGM) return { created: 0, updated: 0, removed: 0, total: 0 };

  const pack = game.packs.get(`${SYSTEM_ID}.${PACK_NAME}`);
  if (!pack) {
    console.warn("Jiujitsu Kaisen | Compendium Feitiços não encontrado.");
    return { created: 0, updated: 0, removed: 0, total: 0 };
  }

  const estavaTravado = await desbloquear(pack);
  let created = 0;
  let updated = 0;
  let removed = 0;

  try {
    const folders = await garantirPastas(pack);
    let index = await pack.getIndex({
      fields: ["name", "folder", "flags.jiujitsu-kaisen.fmCatalogVersion"]
    });

    const idsAmostras = index
      .filter(entry => AMOSTRAS_ANTIGAS_NAO_CATALOGADAS.has(String(entry.name ?? "").trim()))
      .map(entry => entry._id)
      .filter(Boolean);

    if (idsAmostras.length) {
      await Item.deleteDocuments(idsAmostras, { pack: pack.collection });
      removed = idsAmostras.length;
      index = await pack.getIndex({
        fields: ["name", "folder", "flags.jiujitsu-kaisen.fmCatalogVersion"]
      });
    }

    const existentes = new Map(index.map(entry => [String(entry.name ?? "").trim(), entry]));
    const criar = [];
    const atualizar = [];

    for (const source of FM_FEITICOS) {
      const data = foundry.utils.deepClone(source);
      const [tecnica, subcategoria] = data.folderPath;
      delete data.folderPath;
      data.folder = folders.get(`${tecnica}::${subcategoria}`)?.id ?? null;

      const existente = existentes.get(data.name);
      if (!existente) {
        criar.push(data);
        continue;
      }

      const versao = Number(foundry.utils.getProperty(
        existente,
        "flags.jiujitsu-kaisen.fmCatalogVersion"
      )) || 0;
      const folderId = existente.folder?.id ?? existente.folder ?? null;

      if (versao !== FM_FEITICOS_CATALOG_VERSION || folderId !== data.folder) {
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

  if (notify && (created || updated || removed)) {
    ui.notifications?.info(
      `Jiujitsu Kaisen | Feitiços sincronizados: ${created} criados, ${updated} atualizados, ${removed} amostras removidas.`
    );
  }

  return { created, updated, removed, total: FM_FEITICOS.length };
}

