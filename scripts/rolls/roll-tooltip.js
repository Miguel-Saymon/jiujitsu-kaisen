export function registerRollTooltipHooks() {
  Hooks.on("renderChatMessage", (_message, html) => {
    html.find(".jk-roll-result").on("click", event => {
      event.preventDefault();

      const card = event.currentTarget.closest(".jk-roll-card");
      const tooltip = card?.querySelector(".dice-tooltip");

      if (!tooltip) return;

      tooltip.classList.toggle("expanded");
    });
  });
}export function registerRollTooltipHooks() {
  Hooks.on("renderChatMessage", (_message, html) => {
    html.find(".jk-roll-result").on("click", event => {
      event.preventDefault();

      const card = event.currentTarget.closest(".jk-roll-card");
      const tooltip = card?.querySelector(".dice-tooltip");

      if (!tooltip) return;

      tooltip.classList.toggle("expanded");
    });
  });
}o
