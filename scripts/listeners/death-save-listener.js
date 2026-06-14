export function registerDeathSaveListener(sheet, html) {
  html.find(".jk-death-box").on("click", async event => {
    event.preventDefault();

    sheet._jkDeathDrawerOpen = html.find(".jk-death-drawer").prop("open");

    const type = event.currentTarget.dataset.deathType;
    const value = Number(event.currentTarget.dataset.deathValue);

    if (!type || !Number.isFinite(value)) return;

    const current = Number(sheet.actor.system.combate?.testesMorte?.[type]) || 0;
    const next = current === value ? value - 1 : value;

    await sheet.actor.update({
      [`system.combate.testesMorte.${type}`]: Math.max(0, Math.min(3, next))
    });
  });
}
