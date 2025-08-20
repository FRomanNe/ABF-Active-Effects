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

  async applyActiveEffects(postDerived=false) {
    const overrides = {};
    this.statuses.clear();

    // Organize non-disabled effects by their application priority
    const changes = [];
    for ( const effect of this.allApplicableEffects() ) {
      if ( !effect.active ) continue;
      if(effect.system.data?.override && !postDerived) { effect.usedThisCicle = false; continue;}
      if(!effect.system.data?.override && postDerived) continue;
      if(effect.usedThisCicle) continue;
      
      changes.push(...effect.changes.map(change => {
        const c = foundry.utils.deepClone(change);
        c.effect = effect;
        c.priority = c.priority ?? (c.mode * 10);
        return c;
      }));
      if(postDerived)
        effect.usedThisCicle = true; 
      for ( const statusId of effect.statuses ) this.statuses.add(statusId);
    }

    changes.sort((a, b) => a.priority - b.priority);

    // Apply all changes
    for ( let change of changes ) {
      if ( !change.key ) continue;

      let target = this;
      if(change.key.charAt(0) == "@"){
        const parse = this.ParseGetItem(change.key);
        if(!parse.item) continue;
        target = parse.item;
        change.key = parse.key;
      }

      const changes = change.effect.apply(target, change);
      Object.assign(overrides, changes);
    }

    // Expand the set of final overrides
    this.overrides = foundry.utils.expandObject(overrides);

    await this.applyActiveItemEffects(postDerived);
  }

  async applyActiveItemEffects(postDerived = false){
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
          if(!effect.transfer){
              for(const target of this.getItemsOf(effect.system.data.target))
                effect.apply(target,change);
          }
          if(postDerived)
            effect.usedThisCicle = true; 
        }
      }
    }
  }

  ParseGetItem(key){
    if(key.charAt(0) != "@") return;
    let parts = key.split(".");

    parts[0] = parts[0].slice(1);
    let a = parts[0].split("{");
    let dictParts = a[1].split(":");
    let type = a[0];
    let itemKey = dictParts[0];
    let itemValue = dictParts[1].replace("}","");

    let item = this.getItemsOf(type).find((i)=> i[itemKey] == itemValue)

    parts.splice(0,1);
    parts = parts.join(".");
    return {item: item,key: parts};
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