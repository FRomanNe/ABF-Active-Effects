import { INITIAL_AMMO_DATA } from "../../../.././../../Types/AmmoItemConfig.js";
import { calculateAmmoPresence } from "./calculations/calculateAmmoPresence.js";
import { calculateAmmoIntegrity } from "./calculations/calculateAmmoIntegrity.js";
import { calculateAmmoBreaking } from "./calculations/calculateAmmoBreaking.js";
import { calculateAmmoDamage } from "./calculations/calculateAmmoDamage.js";
const mutateAmmoData = (data) => {
  const combat = data.combat;
  combat.ammo = combat.ammo.map((ammo) => {
    ammo.system = foundry.utils.mergeObject(ammo.system, INITIAL_AMMO_DATA, {
      overwrite: false
    });
    return ammo;
  }).map((ammo) => {
    ammo.system.damage.final.value = calculateAmmoDamage(ammo) + (ammo.system.damage.mod?.value ?? 0);
    ammo.system.presence.final.value = calculateAmmoPresence(ammo);
    ammo.system.integrity.final.value = calculateAmmoIntegrity(ammo) + (ammo.system.integrity.mod?.value ?? 0);
    ammo.system.breaking.final.value = calculateAmmoBreaking(ammo, data) + (ammo.system.breaking.mod?.value ?? 0);
    return ammo;
  });
};
export {
  mutateAmmoData
};
