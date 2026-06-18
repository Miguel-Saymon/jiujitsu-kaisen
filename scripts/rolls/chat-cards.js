export function buildRollCard({
  title,
  formula,
  total,
  diceTotal,
  bonus,
  diceResults = []
}) {
  const resultClass = getResultClass(diceTotal);

  return `
    <div class="jk-roll-card ${resultClass}">
      <div class="jk-roll-title">${title}</div>

      <div class="jk-roll-result jk-roll-hover" data-breakdown="${buildBreakdown(formula,diceResults,bonus)}">
        <i class="fas fa-dice-d20 jk-roll-die-icon"></i>
        <span class="jk-roll-total">${total}</span>
      </div>
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


function buildBreakdown(formula, diceResults, bonus) {
  const diceText = `${formula.split(/\s*[+-]/)[0]}: ${diceResults.join(' + ')}`;
  return `${diceText}\n${formatBonus(bonus)} (bônus)`;
}

