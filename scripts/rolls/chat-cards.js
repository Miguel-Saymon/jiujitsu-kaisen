export function buildRollCard({
  title,
  formula,
  total,
  diceTotal,
  bonus
}) {
  const resultClass = getResultClass(diceTotal);

  return `
    <div class="jk-roll-card ${resultClass}">
      <div class="jk-roll-title">${title}</div>

      <div class="jk-roll-result" title="${formula}">
        <i class="fas fa-dice-d20 jk-roll-die-icon"></i>
        <span class="jk-roll-total">${total}</span>
      </div>

      <details class="jk-roll-details">
        <summary>⌄</summary>

      <div class="jk-roll-breakdown">
      <span class="jk-roll-breakdown-die">
      <i class="fas fa-dice-d20"></i>
      ${diceTotal}
      </span>

  <span class="jk-roll-breakdown-bonus">
    ${formatBonus(bonus)}
  </span>
</div>

      </details>
    </div>
  `;
}

function getResultClass(diceTotal) {
  if (diceTotal === 1) return "jk-roll-critical-failure";
  if (diceTotal === 20) return "jk-roll-critical-success";

  return "";
}

function formatBonus(value) {
  const number = Number(value ?? 0);

  if (number > 0) return `+${number}`;
  if (number < 0) return `${number}`;

  return "+0";
}
