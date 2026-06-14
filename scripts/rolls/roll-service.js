import { buildRollCard } from "./chat-cards.js";

export async function executeRoll({
  actor,
  title,
  flavor,
  formula
}) {
  const roll = await new Roll(formula).evaluate();

  const dieResult = roll.dice?.[0]?.total ?? roll.total;
  const bonus = roll.total - dieResult;

  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor,
    content: buildRollCard({
      title,
      formula,
      total: roll.total,
      diceTotal: dieResult,
      bonus
    })
  });

  return roll;
}
