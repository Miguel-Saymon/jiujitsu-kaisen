import { FM_EQUIPAMENTOS, FM_EQUIPAMENTOS_FOLDERS, FM_EQUIPAMENTOS_CATALOG_VERSION } from "./fm-equipamentos-data.js";

const SYSTEM_ID = "jiujitsu-kaisen";
const PACK_NAME = "equipamentos";

async function desbloquear(pack) {
  const locked = Boolean(pack.locked ?? pack.metadata?.locked);
  if (locked) await pack.configure({ locked: false });
  return locked;
}

async function garantirPastas(pack) {
  await pack.getIndex({ fields: ["name", "folder"] });
  let folders = pack.folders ? Array.from(pack.folders) : [];
  const raizes = new Map(
    folders.filter(f => !(f.folder?.id ?? f.folder)).map(f => [String(f.name ?? "").trim(), f])
  );

  for (const meta of FM_EQUIPAMENTOS_FOLDERS.filter(f => !f.parent)) {
    let folder = raizes.get(meta.name);
    if (!folder) {
      [folder] = await Folder.createDocuments([{
        name: meta.name, type: "Item", folder: null, color: null, sorting: "m", sort: meta.sort
      }], { pack: pack.collection });
      raizes.set(meta.name, folder);
    } else if (Number(folder.sort ?? 0) !== Number(meta.sort ?? 0) || folder.sorting !== "m") {
      await folder.update({ sort: meta.sort, sorting: "m" });
    }
  }

  folders = pack.folders ? Array.from(pack.folders) : [];
  const filhos = new Map();
  for (const f of folders) {
    const parentId = f.folder?.id ?? f.folder ?? null;
    if (!parentId) continue;
    const parent = folders.find(x => x.id === parentId);
    if (parent) filhos.set(`${parent.name}::${f.name}`, f);
  }

  for (const meta of FM_EQUIPAMENTOS_FOLDERS.filter(f => f.parent)) {
    const parent = raizes.get(meta.parent);
    if (!parent) continue;
    const key = `${meta.parent}::${meta.name}`;
    let folder = filhos.get(key);
    if (!folder) {
      [folder] = await Folder.createDocuments([{
        name: meta.name, type: "Item", folder: parent.id, color: null, sorting: "m", sort: meta.sort
      }], { pack: pack.collection });
      filhos.set(key, folder);
    } else if (Number(folder.sort ?? 0) !== Number(meta.sort ?? 0) || folder.sorting !== "m") {
      await folder.update({ sort: meta.sort, sorting: "m" });
    }
  }
  return { raizes, filhos };
}

export async function seedFMEquipamentos({ notify = true } = {}) {
  if (!game.user?.isGM) return { created: 0, updated: 0, total: 0 };
  const pack = game.packs.get(`${SYSTEM_ID}.${PACK_NAME}`);
  if (!pack) {
    console.warn("Jiujitsu Kaisen | Compendium Equipamentos não encontrado.");
    return { created: 0, updated: 0, total: 0 };
  }

  const estavaTravado = await desbloquear(pack);
  let created = 0;
  let updated = 0;

  try {
    const { raizes, filhos } = await garantirPastas(pack);
    const index = await pack.getIndex({
      fields: ["name", "folder", "flags.jiujitsu-kaisen.fmCatalogVersion"]
    });
    const existentes = new Map(index.map(e => [String(e.name ?? "").trim(), e]));
    const criar = [];
    const atualizar = [];

    for (const source of FM_EQUIPAMENTOS) {
      const data = foundry.utils.deepClone(source);
      const path = data.folderPath;
      delete data.folderPath;
      data.folder = path.length === 1
        ? raizes.get(path[0])?.id ?? null
        : filhos.get(`${path[0]}::${path[1]}`)?.id ?? null;

      const existente = existentes.get(data.name);
      if (!existente) {
        criar.push(data);
        continue;
      }

      const versao = Number(foundry.utils.getProperty(existente, "flags.jiujitsu-kaisen.fmCatalogVersion")) || 0;
      const folderId = existente.folder?.id ?? existente.folder ?? null;
      if (versao !== FM_EQUIPAMENTOS_CATALOG_VERSION || folderId !== data.folder) {
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
    ui.notifications?.info(`Jiujitsu Kaisen | Equipamentos sincronizados: ${created} criados, ${updated} atualizados.`);
  }
  return { created, updated, total: FM_EQUIPAMENTOS.length };
}

