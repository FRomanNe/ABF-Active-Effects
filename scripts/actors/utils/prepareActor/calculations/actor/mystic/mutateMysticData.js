import { roundTo5Multiples } from "../../../../../../animabfConnector.js";
import { calculateInnateMagic } from "./calculations/calculateInnateMagic.js";
const mutateMysticData = (data) => {
  const allActionsPenalty = data.general.modifiers.allActions.final.value;
  const { mystic } = data;
  mystic.act.main.final.value = Math.max(
    mystic.act.main.base.value + (mystic.act.main.mod?.value ?? 0) + Math.min(0, -roundTo5Multiples(-allActionsPenalty / 2)),
    0
  );
  if (mystic.act.via.length !== 0) {
    for (const actVia of mystic.act.via) {
      actVia.system.final.value = Math.max(
        mystic.act.main.final.value + actVia.system.base.value +( actVia.system.mod?.value ?? 0) + Math.min(0, -roundTo5Multiples(-allActionsPenalty / 2)),
        0
      );
    }
  }
  mystic.innateMagic.main.final.value = mystic.innateMagic.main.base.value + (mystic.innateMagic.main.mod?.value ?? 0)+ calculateInnateMagic(mystic.act.main.final.value);
  if (mystic.innateMagic.via.length !== 0) {
    for (const innateMagicVia of mystic.innateMagic.via) {
      const actVia = mystic.act.via.find((i) => i.name == innateMagicVia.name);
      const actViaValue = mystic.act.via.length !== 0 && actVia ? actVia.system.final.value : mystic.act.main.final.value;
      innateMagicVia.system.final.value = innateMagicVia.system.base.value + (innateMagicVia.system.mod?.value ?? 0) + calculateInnateMagic(actViaValue);
    }
  }
  mystic.magicProjection.final.value = Math.max(
    mystic.magicProjection.base.value + (mystic.magicProjection.mod?.value ?? 0) + allActionsPenalty,
    0
  );
  mystic.magicProjection.imbalance.offensive.final.value = Math.max(
    mystic.magicProjection.imbalance.offensive.base.value + (mystic.magicProjection.imbalance.offensive.mod.value ??0) + allActionsPenalty,
    0
  );
  mystic.magicProjection.imbalance.defensive.final.value = Math.max(
    mystic.magicProjection.imbalance.defensive.base.value + (mystic.magicProjection.imbalance.defensive.mod?.value ?? 0) + allActionsPenalty,
    0
  );
  const dailyZeon = mystic.spellMaintenances.reduce(
    (acc, currentValue) => acc + currentValue.system.cost.value,
    0
  );
  mystic.zeonRegeneration.final.value = Math.max(
    (mystic.zeonRegeneration.base.value) * (mystic.zeonRegeneration.mod?.mult??1) + (mystic.zeonRegeneration.mod?.value ?? 0) - dailyZeon,
    0
  );
  
  mystic.summoning.summon.final.value = mystic.summoning.summon.base.value + (mystic.summoning.summon.mod?.value ?? 0) + Math.min(allActionsPenalty, 0);
  mystic.summoning.banish.final.value = mystic.summoning.banish.base.value + ((mystic.summoning.banish.mod?.value ?? 0)) + Math.min(allActionsPenalty, 0);
  mystic.summoning.bind.final.value = mystic.summoning.bind.base.value + (mystic.summoning.bind.mod?.value ?? 0) + Math.min(allActionsPenalty, 0);
  mystic.summoning.control.final.value = mystic.summoning.control.base.value + (mystic.summoning.control.mod?.value ?? 0) + Math.min(allActionsPenalty, 0);
  if (mystic.preparedSpells.length !== 0) {
    for (let preparedSpell of mystic.preparedSpells) {
      if (preparedSpell.system.zeonAcc.value >= preparedSpell.system.zeonAcc.max)
        preparedSpell.system.prepared.value = true;
      else
        preparedSpell.system.prepared.value = false;
      let prepared = preparedSpell.system.prepared.value;
      if (prepared) {
        preparedSpell.system.zeonAcc.value = preparedSpell.system.zeonAcc.max;
      }
    }
  }
};
export {
  mutateMysticData
};
