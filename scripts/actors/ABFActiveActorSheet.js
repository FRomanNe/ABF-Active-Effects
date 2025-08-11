import {ABFActorSheet} from "../animabfConnector.js";
import {ALL_ITEM_CONFIGURATIONS} from "./utils/prepareItems/constants.js";

class ABFActiveActorSheet extends ABFActorSheet
{

  constructor(actor, options) {
    super(actor, options);
    this.i18n = game.i18n;
    this.position.width = this.getWidthDependingFromContent();
  }
  activateListeners(html) {
    ActorSheet.prototype.activateListeners.call(this,html);
    if (!this.options.editable) return;
    const handler = (ev) => this._onDragStart(ev);
    html.find(".rollable").click((e) => {
      this._onRoll(e);
    });
    html.find(".contractible-button").click((e) => {
      const { contractibleItemId } = e.currentTarget.dataset;
      if (contractibleItemId) {
        const ui = this.actor.system.ui;
        ui.contractibleItems = {
          ...ui.contractibleItems,
          [contractibleItemId]: !ui.contractibleItems[contractibleItemId]
        };
        this.actor.update({ system: { ui } });
      }
    });
    for (const item of Object.values(ALL_ITEM_CONFIGURATIONS)) {
      this.buildCommonContextualMenu(item);
      html.find(item.selectors.rowSelector).each((_, row) => {
        row.setAttribute("draggable", "true");
        row.addEventListener("dragstart", handler, false);
      });
      html.find(`[data-on-click="${item.selectors.addItemButtonSelector}"]`).click(() => {
        item.onCreate(this.actor);
      });
    }
  }

}
export {
  ABFActiveActorSheet as default
};
