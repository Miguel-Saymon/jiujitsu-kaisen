import { FM_APTIDOES, FM_APTIDOES_FOLDERS, FM_APTIDOES_CATALOG_VERSION } from "./fm-aptidoes-data.js";

const SYSTEM_ID = "jiujitsu-kaisen";
const PACK_NAME = "aptidoes-amaldicoadas";

async function desbloquear(pack) {
  const locked = Boolean(pack.locked ?? pack.metadata?.locked);
  if (locked) await pack.configure({ locked: false });
  return locked;
}

async function garantirPastas(pack) {
  // V11+ mantém as pastas internas do Compendium em pack.folders.
  await pack.getIndex({ fields: ["name", "folder"] });
  const folders = pack.folders ? Array.from(pack.folders) : [];
  const porNome = new Map(folders.map(folder => [String(folder.name ?? "").trim(), folder]));
  const faltantes = FM_APTIDOES_FOLDERS.filter(name => !porNome.has(name));

  if (faltantes.length) {
    const criadas = await Folder.createDocuments(
      faltantes.map((name, index) => ({
        name,
        type: "Item",
        folder: null,
        sorting: "a",
        sort: (index + 1) * 100000
      })),
      { pack: pack.collection }
    );
    for (const folder of criadas) porNome.set(folder.name, folder);
  }
  return porNome;
}

export async function seedFMAptidoes({ notify = true } = {}) {
  if (!game.user?.isGM) return { created: 0, updated: 0, total: 0 };

  const pack = game.packs.get(`${SYSTEM_ID}.${PACK_NAME}`);
  if (!pack) {
    console.warn("Jiujitsu Kaisen | Compendium Aptidões Amaldiçoadas não encontrado.");
    return { created: 0, updated: 0, total: 0 };
  }

  const estavaTravado = await desbloquear(pack);
  let created = 0;
  let updated = 0;

  try {
    const pastas = await garantirPastas(pack);
    const index = await pack.getIndex({ fields: ["name", "folder", "flags.jiujitsu-kaisen.fmCatalogVersion"] });
    const existentes = new Map(index.map(entry => [String(entry.name ?? "").trim(), entry]));
    const criar = [];
    const atualizar = [];

    for (const source of FM_APTIDOES) {
      const folder = pastas.get(source.folderName);
      const data = foundry.utils.deepClone(source);
      delete data.folderName;
      data.folder = folder?.id ?? null;

      const existente = existentes.get(data.name);
      if (!existente) {
        criar.push(data);
        continue;
      }

      const versao = Number(foundry.utils.getProperty(existente, "flags.jiujitsu-kaisen.fmCatalogVersion")) || 0;
      const folderId = existente.folder?.id ?? existente.folder ?? null;
      if (versao !== FM_APTIDOES_CATALOG_VERSION || folderId !== data.folder) {
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
    ui.notifications?.info(`Jiujitsu Kaisen | Aptidões Amaldiçoadas sincronizadas: ${created} criadas, ${updated} atualizadas.`);
  }
  return { created, updated, total: FM_APTIDOES.length };
}

