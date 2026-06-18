export async function executeRoll({
  actor,
  title,
  flavor,
  formula,
  rollMode
}) {
  const rollData = typeof actor?.getRollData === "function"
    ? actor.getRollData()
    : actor?.system ?? {};

  const roll = await new Roll(formula, rollData).evaluate();

  await roll.toMessage(
    {
      speaker: ChatMessage.getSpeaker({ actor }),
      flavor: flavor || title
    },
    {
      rollMode: rollMode || game.settings.get("core", "rollMode")
    }
  );

  return roll;
}

