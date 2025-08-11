import { INITIAL_AMMO_DATA } from "../../../.././../../Types/AmmoItemConfig.js";
const mutateAmmoData = (data) => {
  const combat = data.combat;
  combat.ammo = combat.ammo.map((ammo) => {
    ammo.system = foundry.utils.mergeObject(ammo.system, INITIAL_AMMO_DATA, {
      overwrite: false
    });
    return ammo;
  }).map((ammo) => {
    ammo.system.damage.mod = {value: 0, mult: 1};
    ammo.system.integrity.mod = {value: 0};
    ammo.system.breaking.mod = {value: 0};
    return ammo;
  });
};
export {
  mutateAmmoData
};
