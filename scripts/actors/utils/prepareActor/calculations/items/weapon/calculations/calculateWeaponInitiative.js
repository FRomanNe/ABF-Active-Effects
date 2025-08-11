import { WeaponSizeProportion } from "../../../../../../../animabfConnector.js";
const calculateWeaponInitiative = (weapon) => {
  let initiative = weapon.system.initiative.base.value+ (weapon.system.initiative.mod?.value??0) + weapon.system.quality.value;
  if (weapon.system.sizeProportion.value !== WeaponSizeProportion.NORMAL) {
    initiative -= 40;
  }
  return initiative;
};
export {
  calculateWeaponInitiative
};
