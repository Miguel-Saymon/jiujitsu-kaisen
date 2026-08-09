const TIPOS_SUPORTADOS = new Set([
  "arma", "equipamento", "consumivel", "tesouro", "habilidade", "feitico", "acao"
]);

export async function importarItemSoltoNoActor(actor, data) {
  if (!actor || data?.type !== "Item") return null;

  const ItemClass = CONFIG.Item?.documentClass ?? Item;
  const item = await ItemClass.fromDropData(data);
  if (!item || !TIPOS_SUPORTADOS.has(item.type)) return null;

  // Um Item que já pertence ao mesmo Actor não deve ser duplicado.
  if (item.parent?.id === actor.id) return item;

  const source = foundry.utils.deepClone(item.toObject());
  delete source._id;
  delete source.folder;
  source.sort = 0;

  const [criado] = await actor.createEmbeddedDocuments("Item", [source]);
  return criado ?? null;
}

