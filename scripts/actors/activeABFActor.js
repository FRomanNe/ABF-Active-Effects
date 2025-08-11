import { INITIAL_ACTIVE_ACTOR_DATA } from "./constants.js";
import { prepareActiveActor } from "./utils/prepareActor/prepareActor.js";
import { prepareBaseActiveActorModifiers } from "./utils/prepareActor/prepareBaseActor.js";
import { ALL_ITEM_CONFIGURATIONS } from "./utils/prepareItems/constants.js";
import {ABFActor} from "../animabfConnector.js";
import ABFActiveActorSheet from "./ABFActiveActorSheet.js";
import {ABFActiveItems} from "../items/ABFItems.js";
class ActiveABFActor extends ABFActor
{
    constructor(data, context) {
    super(data, context);
    }


  async prepareData(){
    await this.prepareBaseData();
    await super.prepareEmbeddedDocuments();
    await this.prepareDerivedData();
  }

  async prepareDerivedData() 
  {
    Actor.prototype.prepareDerivedData.call(this);
    this.system = foundry.utils.mergeObject(this.system, INITIAL_ACTIVE_ACTOR_DATA, {
      overwrite: false
    });
    await prepareActiveActor(this);
    await this.applyActiveEffects(true);
  }
  async prepareBaseData(){
      super.prepareBaseData();
      await prepareBaseActiveActorModifiers(this);
  }
  *allApplicableEffects() {
    for ( const effect of this.effects ) {
      yield effect;
    }
    if ( CONFIG.ActiveEffect.legacyTransferral ) return;
    for ( const item of this.items ) {
      for ( const effect of item.effects ) {
        if ( effect.transfer ) yield effect;
        
      }
    }
  }

  applyActiveEffects(postDerived=false) {
    const overrides = {};
    this.statuses.clear();

    // Organize non-disabled effects by their application priority
    const changes = [];
    for ( const effect of this.allApplicableEffects() ) {
      if ( !effect.active ) continue;
      if(effect.system.data?.override && !postDerived) continue;
      if(!effect.system.data?.override && postDerived) continue;

      changes.push(...effect.changes.map(change => {
        const c = foundry.utils.deepClone(change);
        c.effect = effect;
        c.priority = c.priority ?? (c.mode * 10);
        return c;
      }));
      for ( const statusId of effect.statuses ) this.statuses.add(statusId);
    }

    changes.sort((a, b) => a.priority - b.priority);

    // Apply all changes
    for ( let change of changes ) {
      if ( !change.key ) continue;
      const changes = change.effect.apply(this, change);
      Object.assign(overrides, changes);
    }

    // Expand the set of final overrides
    this.overrides = foundry.utils.expandObject(overrides);

    this.applyActiveItemEffects(postDerived);
  }

  applyActiveItemEffects(postDerived = false){
    const changes = [];
    for ( const item of this.items ) {
      const config = ALL_ITEM_CONFIGURATIONS[item.type];
      

      if(config.prepareBaseItem)
      config.prepareBaseItem(item);
      for ( const effect of item.effects) {
        if ( !effect.active ) continue;
        if (effect.system.data?.override && !postDerived){ effect.usedThisCicle = false; continue;}
        if (!effect.system.data?.override && postDerived) continue;
        if(effect.usedThisCicle) continue;

        const changes = [];
        changes.push(...effect.changes.map(change => {
          const c = foundry.utils.deepClone(change);
          c.effect = effect;
          c.priority = c.priority ?? (c.mode * 10);
          return c;
        }));
        changes.sort((a, b) => a.priority - b.priority);
        for(const change of changes){
          if(effect.system.data){
            if(effect.system.data.target != "actor")
              for(const target of this.getItemsOf(effect.system.data.target))
                effect.apply(target,change);
          }else{
            effect.apply(effect.target,change);
          }
          if(postDerived)
            effect.usedThisCicle = true; 
        }
      }
    }
  }

  activateTechnique(technique) {
    technique.system.active = true;
    for(const effect in technique.effectsData){
      effect.effect.active = true;
      if(effect.targetType == "actor"){
        effect.effect.transfer = true;
      }else{
        items = this.getItemsOf(effect.targetType).filter(i=>i.equipped==true);
        //effect.effect.target = items;
      }

    }
  }


  getAllActiveItems() {
    return Object.values(ABFActiveItems).flatMap((itemType) => this.getItemsOf(itemType));
  }
  getItemsOf(type) {
    const configuration = ALL_ITEM_CONFIGURATIONS[type];
    if (!configuration) {
      Logger.error(`No configuration found for item type ${type}`);
      return [];
    }
    if (configuration.isInternal) {
      return this.getInnerItems(type);
    }
    return this.items.filter((i) => i.type === type);
  }
    _getSheetClass() {
    return ABFActiveActorSheet;
  }
}

export{
  ActiveABFActor
};