import { prepareItem } from "./utils/prepareItem/prepareItem.js";
import { ITEM_CONFIGURATIONS } from "../actors/utils/prepareItems/constants.js";
class ABFActiveItem extends Item {


  async prepareData(){
    await this.prepareBaseData();
    await this.prepareEmbeddedDocuments();
    await this.prepareDerivedData();
  }

  async prepareBaseData(){
    await super.prepareBaseData();
    const config = ITEM_CONFIGURATIONS[this.type];
    if(config.activeItem)
      if(config.prepareBaseItem)
    await config.prepareBaseItem(this);
  }
  async prepareEmbeddedDocuments() {
    await super.prepareEmbeddedDocuments();
  }
  async prepareDerivedData() {
    await super.prepareDerivedData();
    await prepareItem(this);
  }

}
export {
  ABFActiveItem as default
};
