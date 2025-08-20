import {createSphearData} from "./createSpheareData.js";
const mutateMysticData = (data) => {
  const { mystic } = data;
  mystic.act.main.mod = {value: 0};
  if (mystic.act.via.length !== 0) {
    for (let actVia of mystic.act.via) {
      actVia.system.mod = {value: 0};
    }
  }
  mystic.innateMagic.main.mod = {value: 0};
  if (mystic.innateMagic.via.length !== 0) {
    for (const innateMagicVia of mystic.innateMagic.via) {
      innateMagicVia.system.mod = {value: 0};
    }
  }
  mystic.magicProjection.mod = {value: 0};
  mystic.magicProjection.imbalance.offensive.mod = {value: 0};
  mystic.magicProjection.imbalance.defensive.mod = {value: 0};

  mystic.zeonRegeneration.mod = {value:0,mult:1};

  mystic.summoning.summon.mod = {value: 0};
  mystic.summoning.banish.mod = {value: 0};
  mystic.summoning.bind.mod = {value: 0};
  mystic.summoning.control = {value: 0};
};
export {
  mutateMysticData
};
