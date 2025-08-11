import { ABFItemSheet,ABFDialogs } from "../animabfConnector.js";
import {ALL_ITEM_CONFIGURATIONS,  ITEM_CONFIGURATIONS } from "../actors/utils/prepareItems/constants.js";

class ABFActiveItemSheet extends ABFItemSheet {
  constructor(object, options) {
    super(object, options);
    this.position.width = this.getWidthFromType();
    this.position.height = this.getHeightFromType();
  }
  static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["sheet", "item"],
        resizable: true,
        tabs: [
          {
            navSelector: ".effect-tabs",
            contentSelector: ".sheet-body",
            initial: "main"
          }
        ]
      });
  }
  get template() {
    const configuration = ITEM_CONFIGURATIONS[this.item.type];
    if (configuration && configuration.hasSheet) {
      if(configuration.activeItem)
        return `modules/anima-active-effects/templates/items/${this.item.type}/${this.item.type}.hbs`
      else
        return `systems/animabf/templates/items/${this.item.type}/${this.item.type}.hbs`;
    }
    return super.template;
  }

  activateListeners(html) {
    super.activateListeners(html);
    if (!this.options.editable) return;

    html.find(`[data-on-click="add-active-effect"]`).click( async () => {
    let effect = {
      name:"New Active Effect",
      description:"",
      target: this.object,
      changes: [],
      };
    effect = await this.object.createEmbeddedDocuments("ActiveEffect", [effect]);
    let d = new ActiveEffectConfig(effect[0])
    d.render(true);
  });
  for (const i in this.object.effects.contents){
    html.find(`[data-on-click="effect=${this.object.effects.contents[i].id}"]`).click( async ()=>{
      let d = new ActiveEffectConfig(this.object.effects.contents[i]);
      d.render(true);
    });

    
  }
    this.buildEffectMenu();
  }

    buildEffectMenu = () => {
    
    const containerSelector = "#effects-context-menu-container"
    const rowSelector = ".effect-row";
    const fieldPath = ["effects"];
    
    const deleteRowMessage = game.i18n.localize("contextualMenu.common.options.delete");
    const otherItems = [];

      otherItems.push({
        name: game.i18n.localize("contextualMenu.common.options.edit"),
        icon: '<i class="fas fa-edit fa-fw"></i>',
        callback: (target) => {
          const { itemId } = target[0].dataset;
          if (itemId) {
            const item = this.object.effects.get(itemId);
            if (item?.sheet) {
              item.sheet.render(true);
            } else {
              Logger.warn("Item sheet was not found for item:", item);
            }
          } else {
            Logger.warn("Item ID was not found for target:", target);
          }
        }
      });
    
      otherItems.push({
        name: deleteRowMessage,
        icon: '<i class="fas fa-trash fa-fw"></i>',
        callback: (target) => {
            const id = target[0].dataset.itemId;
            if (!id) {
              throw new Error(
                "Data id missing. Are you sure to set data-item-id to rows?"
              );
            }
            ABFDialogs.confirm(
              game.i18n.localize("dialogs.items.delete.title"),
              game.i18n.localize("dialogs.items.delete.body"),
              {
                onConfirm: () => {
                  if (fieldPath) {
                    if (this.object.getEmbeddedDocument("ActiveEffect", id)) {
                      this.object.deleteEmbeddedDocuments("ActiveEffect", [id]);
                    } else {
                      let items = getFieldValueFromPath(this.object, fieldPath);
                      items = items.filter((item) => item._id !== id);
                      const dataToUpdate = {
                        effects: items
                      };
                      this.actor.update(dataToUpdate);
                    }
                  }
                }
              }
            );
          
        }
      });
    
    return new ContextMenu($(containerSelector), rowSelector, [...otherItems]);
  };


    async getData(options) {
    const sheet = await super.getData(options);
    sheet.effects = sheet.item.effects;
    return sheet;
  }

}

export {
  ABFActiveItemSheet as default
};
