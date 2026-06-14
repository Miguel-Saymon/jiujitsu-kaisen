export function getNumericBonus(value) {
  const number = Number(value ?? 0);
  return Number.isFinite(number) ? number : 0;
}

export function formatBonus(value) {
  const number = getNumericBonus(value);
  return number >= 0 ? `+${number}` : `${number}`;
}

export function buildD20Formula(bonus = 0) {
  const numericBonus = getNumericBonus(bonus);

  if (numericBonus === 0) {
    return "1d20";
  }

  return `1d20 ${formatBonus(numericBonus)}`;
}
