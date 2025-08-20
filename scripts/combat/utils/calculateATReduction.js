import { WeaponShotType } from "../../animabfConnector.js";
const calculateATReduction = (result) => {
  let quality = 0;
  let flat = 0;
  const { weapon } = result;
  if (weapon) {
    quality = weapon.system.quality.value;
    flat = weapon.system.reduceAT?.value;
    if (weapon.system.isRanged.value && weapon.system.shotType.value === WeaponShotType.SHOT) {
      quality = weapon.system.ammo?.system.quality.value ?? 0;
      flat = weapon.system.ammo?.system.reduceAT?.value ?? 0;
    }
  }
  if (quality > 0)
    quality = Math.round(quality / 5);
  else
    quality = 0;

  return  quality + flat;
};
export {
  calculateATReduction
};
