import { ABFItems,ABFItemConfigFactory,openSimpleInputDialog } from "../animabfConnector.js";

const DisadvantageItemConfig = ABFItemConfigFactory({
  type: ABFItems.DISADVANTAGE,
  isInternal: false,
  hasSheet: true,
  activeItem: true,
  fieldPath: ["general", "disadvantages"],
  selectors: {
    addItemButtonSelector: "add-disadvantage",
    containerSelector: "#disadvantages-context-menu-container",
    rowSelector: ".disadvantage-row"
  },
  onCreate: async (actor) => {
    const { i18n } = game;
    const name = await openSimpleInputDialog({
      content: i18n.localize("dialogs.items.disadvantage.content")
    });
    await actor.createItem({
      name,
      type: ABFItems.DISADVANTAGE
    });
  }
});
export {
  DisadvantageItemConfig
};
