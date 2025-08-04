import { INITIAL_ACTIVE_ACTOR_DATA } from "./constants.js";
import { prepareActiveActor } from "./utils/prepareActor/prepareActor.js";
import { prepareBaseActiveActorModifiers } from "./utils/prepareActor/prepareBaseActor.js";
class ActiveABFActor extends CONFIG.Actor.documentClass
{
    constructor(data, context) {
      INITIAL_ACTOR_DATA = INITIAL_ACTIVE_ACTOR_DATA;
      super(data, context);
    }

  async prepareDerivedData() 
  {
    Actor.prototype.prepareDerivedData.call(this);
    this.system = foundry.utils.mergeObject(this.system, INITIAL_ACTIVE_ACTOR_DATA, {
      overwrite: false
    });
    await prepareActiveActor(this);
  }

  async prepareBaseData(){
    super.prepareBaseData();
    await prepareBaseActiveActorModifiers(this);
  }
}

export{
  ActiveABFActor
};