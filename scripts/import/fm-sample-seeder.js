import { FM_SAMPLE_PACKS } from "./fm-sample-data.js";

const SYSTEM_ID = "jiujitsu-kaisen";

async function criarItensAusentes(packName, items) {
  const pack = game.packs.get(`${SYSTEM_ID}.${packName}`);
  if (!pack) {
    console.warn(`Jiujitsu Kaisen | Compendium não encontrado: ${packName}`);
    return 0;
  }

  const index = await pack.getIndex({ fields: ["name"] });
  const existentes = new Set(index.map(entry => String(entry.name ?? "").trim()));
  const ausentes = items.filter(item => !existentes.has(String(item.name ?? "").trim()));
  if (!ausentes.length) return 0;

  const estavaTravado = Boolean(pack.locked ?? pack.metadata?.locked);
  if (estavaTravado) await pack.configure({ locked: false });

  try {
    await Item.createDocuments(
      ausentes.map(item => foundry.utils.deepClone(item)),
      { pack: pack.collection }
    );
  } finally {
    if (estavaTravado) await pack.configure({ locked: true });
  }

  return ausentes.length;
}

export async function seedFMSamples({ notify = true } = {}) {
  if (!game.user?.isGM) return { created: 0, packs: {} };

  let created = 0;
  const packs = {};

  for (const [packName, items] of Object.entries(FM_SAMPLE_PACKS)) {
    if (["aptidoes-amaldicoadas", "feiticos", "equipamentos", "habilidades-especializacao", "habilidades-lendarias", "melhorias-superiores", "talentos"].includes(packName)) continue;
    try {
      const quantidade = await criarItensAusentes(packName, items);
      packs[packName] = quantidade;
      created += quantidade;
    } catch (error) {
      console.error(`Jiujitsu Kaisen | Falha ao preencher amostra do pack ${packName}.`, error);
      packs[packName] = -1;
    }
  }

  if (notify && created > 0) {
    ui.notifications?.info(`Jiujitsu Kaisen | ${created} itens de amostra do F&M adicionados aos Compendiums.`);
  }

  return { created, packs };
}

