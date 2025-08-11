import { ABFItems } from "../animabfConnector.js";
import { openSimpleInputDialog } from "../animabfConnector.js";
import { ABFItemConfigFactory } from "../animabfConnector.js";

const Type = "ActiveEffect";
const ActiveEffectItemConfig = {
    type: Type,
    isInternal: false,
    hasSheet: true,
    activeItem: false,
    defaultValue: {},
    fieldPath: ["effects"],
    selectors: {
        containerSelector: "#effects-context-menu-container",
        rowSelector: ".effects-row"
    },
    onCreate: async (actor) => {
        const { i18n } = game;
        const name = await openSimpleInputDialog({
        content: i18n.localize("dialogs.items.weapons.content")
        });
        const itemData = {
        name,
        type: Type,
        system: {}
    };
    await actor.createItem(itemData);
    },
    getFromDynamicChanges(changes) {
        const path = this.fieldPath;
        return path.reduce((field, nextKey) => field[nextKey], changes);
    },
    cleanFieldPath(actor) {
        return;
    },
    addToFieldPath(actor, item) {
        const path = this.fieldPath;
        const lastKey = path.pop();
        const parentField = path.reduce((field, nextKey) => field[nextKey], actor);
        const index = parentField[lastKey].findIndex((i) => i._id === item._id);
        if (index === -1) {
        parentField[lastKey].push(item);
        } else {
        parentField[lastKey][index] = item;
        }
    },
    async resetFieldPath(actor) {
        if (!this.isInternal) this.cleanFieldPath(actor);
        const items = actor.getItemsOf(this.type);
        for (const item of items) {
        await this.onAttach?.(actor, item);
        this.addToFieldPath(actor, item);
        this.prepareItem?.(item);
        }
    },
    async onUpdate(actor, changes) {
        for (const id of Object.keys(changes)) {
        const { name, system } = changes[id];
        const itemData = system ? { id, name, system } : { id, name };
        if (this.isInternal) {
            actor.updateInnerItem({ type: this.type, ...itemData });
        } else {
            await actor.updateItem(itemData);
        }
        }
    }
};
export {
  ActiveEffectItemConfig,
}