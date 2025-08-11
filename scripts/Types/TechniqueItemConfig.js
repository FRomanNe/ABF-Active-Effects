import { ABFItems,ABFItemConfigFactory } from "../animabfConnector.js";
import {TechniqueBuilderDialog} from "../dialogs/TechniqueBuilderDialog.js";
import { MANTENANCE, TargetTypes } from "../items/utils/TechniquesData/constants.js";
import { ALL_TECHNIQUE_EFFECTS } from "../items/utils/TechniquesData/TechniqueEffectData.js";


const INITIAL_TECHNIQUE_DATA = {
  description: { value: "" },
  level: { value: 0 },
  strength: { value: 0 },
  agility: { value: 0 },
  dexterity: { value: 0 },
  constitution: { value: 0 },
  willPower: { value: 0 },
  power: { value: 0 },
  martialKnowledge: { value: 0 },
  active: false,
  combinable: false,
};





function createEffects(data){
  let effectData = [];
  let effects = [];
  for(const ef of data ){
    const fullEffect = ALL_TECHNIQUE_EFFECTS[ef.effect]
    const tier = fullEffect.tiers[ef.tier];

    let transfer = fullEffect.target == TargetTypes.ACTOR;
    
    let effect = {
      name: game.i18n.localize(fullEffect.name),
      transfer: transfer,
      disabled: true,
      system: {data: fullEffect,tier:tier},
      changes: 
      [{
        key: fullEffect.fieldPath,
        mode: fullEffect.mode,
        value: tier.value
      }]
    };
    effects.push(effect);
  }
  return {data: effectData,effects:effects};
}



const TechniqueItemConfig = ABFItemConfigFactory({
  type: ABFItems.TECHNIQUE,
  isInternal: false,
  hasSheet: true,
  activeItem: true,
  fieldPath: ["domine", "techniques"],
  selectors: {
    addItemButtonSelector: "add-technique",
    containerSelector: "#techniques-context-menu-container",
    rowSelector: ".technique-row"
  },
  contextMenuConfig: 
  {
    buildExtraOptionsInContextMenu: (actor)=>{
      return [{
        name: "Activate",
        icon: '<i class="fas fa-explosion fa-fw"></i>',
        callback: (target) => {
          const { itemId } = target[0].dataset;
          if (itemId) {
            const item = actor.items.get(itemId);
            actor.activateTechnique(item);
          } else {
            Logger.warn("Item ID was not found for target:", target);
          }
        }
      }]
    }
  },
  onCreate: async (actor) => {
    const form = await TechniqueBuilderDialog();
    const name = form.name;
    const {data, effects} = createEffects(form.effects);
    try{
      let item = await actor.createItem({
        name,
        type: ABFItems.TECHNIQUE,
        system: {...INITIAL_TECHNIQUE_DATA, effectData:data}
      });
      for (const effect in effects){
        let ef = await item.createEmbeddedDocuments("ActiveEffect", [effects[effect]]);
        item.system.effectData[effect].effect = ef[0];
        ef[0].system.data = item.system.effectData[effect];
      } 
    }
    catch (err)
    {
      console.log(err);
    }
  },
  // TODO: This should go inside prepareItem, as in spellItemConfig. Same for other TextEditors
  // That it's called also when opening the standalone sheet.
  onAttach: async (actor, technique) => {
    technique.system.enrichedDescription = await TextEditor.enrichHTML(
      technique.system.description?.value ?? "",
      {
        async: true
      }
    );
  }
});
export {
  INITIAL_TECHNIQUE_DATA,
  MANTENANCE,TargetTypes,
  TechniqueItemConfig
};
