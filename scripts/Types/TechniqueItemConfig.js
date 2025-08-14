import { ABFItems,ABFItemConfigFactory } from "../animabfConnector.js";
import {TechniqueBuilderDialog} from "../dialogs/TechniqueBuilderDialog.js";
import { MAINTENANCE, TargetTypes,Frequency } from "../items/utils/TechniquesData/constants.js";
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
  let effects = [{
    name: data.name,
    disabled: true,
    transfer:true,
    duration: {rounds:0,turns:0},
    img: "icons/svg/ice-aura.svg",
    system: {isHeader:true}
  }];
  
  let maxDuration = 0;
  let maxFrequency = Frequency.ACTION;

  for(const ef of data.effects ){
    const fullEffect = ALL_TECHNIQUE_EFFECTS[ef.effect]
    const tier = fullEffect.tiers[ef.tier];
    let transfer = fullEffect.target == TargetTypes.ACTOR;

    let rounds = null;
    let turns = null;

    let duration = 0;
    switch (ef.maint){
      case MAINTENANCE.NO:
        duration = 1;
        break;
      case MAINTENANCE.MAINT:
        duration = 99;
        break;
      case MAINTENANCE.MINOR:
        duration= 5;
        break;
      case MAINTENANCE.GREATER:
        duration= 20;
        break;
    }
    
    if(duration> maxDuration){
      maxDuration = duration;
      maxFrequency = fullEffect.frequency;
    }

    if(fullEffect.frequency == Frequency.ACTION){
      turns = duration;
    }
    else if (fullEffect.frequency == Frequency.TURN){
      rounds = duration;
    }

    let effect = {
      name: game.i18n.localize(fullEffect.name),
      transfer: transfer,
      disabled: true,
      duration: {
        rounds: rounds,
        turns: turns
      },
      system: {data: fullEffect,tier:tier,baseDuration:{rounds:rounds,turns:turns}},
    };
    if(fullEffect.fieldPath)
      effect.changes =
      [{
        key: fullEffect.fieldPath,
        mode: fullEffect.mode,
        value: tier.value
      }];
    effects.push(effect);
  }

  if(maxFrequency == Frequency.ACTION){
    effects[0].duration.turns = maxDuration;
  }
  else if (maxFrequency == Frequency.TURN){
    effects[0].duration.rounds = maxDuration;
  }
  effects[0].system.baseDuration ={turns:effects[0].duration.turns,rounds:effects[0].duration.rounds};

  return effects;
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
            TechniqueItemConfig.activateTechnique(item,actor);
          } else {
            Logger.warn("Item ID was not found for target:", target);
          }
        },
        condition: (target) =>{
          const { itemId } = target[0].dataset;
          const item = actor.items.get(itemId);
          if(item.system.active)
            return false;
          else
            return true;
        }
      },{
        name: "Deactivate",
        icon: '<i class="fas fa-close fa-fw"></i>',
        callback: (target) => {
          const { itemId } = target[0].dataset;
          if (itemId) {
            const item = actor.items.get(itemId);
            TechniqueItemConfig.activateTechnique(item,actor);
          } else {
            Logger.warn("Item ID was not found for target:", target);
          }
        },
        condition: (target) =>{
          const { itemId } = target[0].dataset;
          const item = actor.items.get(itemId);
          if(item.system.active)
            if (item.system.active == true)
              return true;
          return false;
        }
      }]
    }
  },
  onCreate: async (actor) => {
    const form = await TechniqueBuilderDialog();
    const name = form.name;
    const effects = createEffects(form);
    try{
      let item = await actor.createItem({
        name,
        type: ABFItems.TECHNIQUE,
        system: {...INITIAL_TECHNIQUE_DATA, effectData:[]}
      });

      let efs = await item.createEmbeddedDocuments("ActiveEffect", effects);
      await item.update({"system.effectData":efs});
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
  },
  async activateTechnique(technique,actor) {
    let changes = [];
    if(technique.system.active){
      await technique.update({"system.active":false});
      for(const effect of technique.system.effectData){
        changes.push({_id:effect._id, disabled:true});
        if(effect.system.data?.flag){
          let flag = effect.system.data.flag;
          await actor.setFlag("animabf",flag.key,flag.value.off);
        }
      }
    }
    else
    {
      await technique.update({"system.active":true});

      for(const effect of technique.system.effectData){
        let change = {};
        change._id = effect._id;
        change.disabled = false;

        change.duration ={ 
          turns: effect.system.baseDuration.turns,
          rounds: effect.system.baseDuration.rounds
        }

        changes.push(change);

        if(effect.system.data?.flag){
          let flag = effect.system.data.flag;
          let value = flag.value.on == "value"? effect.system.data.tiers[effect.system.tier].value : flag.value.on;
          await actor.setFlag("animabf",flag.key,value);
        }
            
      }
    }
    await technique.updateEmbeddedDocuments("ActiveEffect",changes);
  }
});
export {
  INITIAL_TECHNIQUE_DATA,
  MAINTENANCE as MANTENANCE,TargetTypes,
  TechniqueItemConfig
};
