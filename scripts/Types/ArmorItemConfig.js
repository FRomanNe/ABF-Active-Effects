import { ABFItems } from "../animabfConnector.js";
import { openSimpleInputDialog } from "../animabfConnector.js";
import { ABFItemConfigFactory } from "../animabfConnector.js";
import { ArmorLocation,ArmorType } from "../animabfConnector.js";
import { mutateArmorItemData } from "../actors/utils/prepareActor/base/items/armor/mutateArmorItemData.js";

const derivedFieldInitialData = {
  base: { value: 0 },
  mod: {value: 0},
  final: { value: 0 }
};
const INITIAL_ARMOR_DATA = {
  cut: derivedFieldInitialData,
  impact: derivedFieldInitialData,
  thrust: derivedFieldInitialData,
  heat: derivedFieldInitialData,
  electricity: derivedFieldInitialData,
  cold: derivedFieldInitialData,
  energy: derivedFieldInitialData,
  integrity: derivedFieldInitialData,
  presence: derivedFieldInitialData,
  wearArmorRequirement: derivedFieldInitialData,
  movementRestriction: derivedFieldInitialData,
  naturalPenalty: derivedFieldInitialData,
  perceptionPenalty: derivedFieldInitialData,
  isEnchanted: { value: false },
  type: { value: ArmorType.SOFT },
  localization: { value: ArmorLocation.BREASTPLATE },
  quality: { value: 0 },
  equipped: { value: false }
};
const ArmorItemConfig = ABFItemConfigFactory({
  type: ABFItems.ARMOR,
  isInternal: false,
  hasSheet: true,
  activeSheet: true,
  defaultValue: INITIAL_ARMOR_DATA,
  fieldPath: ["combat", "armors"],
  selectors: {
    addItemButtonSelector: "add-armor",
    containerSelector: "#armors-context-menu-container",
    rowSelector: ".armor-row"
  },
  onCreate: async (actor) => {
    const { i18n } = game;
    const name = await openSimpleInputDialog({
      content: i18n.localize("dialogs.items.armors.content")
    });
    const itemData = {
      name,
      type: ABFItems.ARMOR,
      system: INITIAL_ARMOR_DATA
    };
    await actor.createItem(itemData);
  },
  prepareBaseItem(data){
    mutateArmorItemData(data);
  }
  
});
export {
  ArmorItemConfig,
  INITIAL_ARMOR_DATA
};
