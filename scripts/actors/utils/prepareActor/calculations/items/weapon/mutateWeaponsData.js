import { WeaponShotType } from "../../../../../../animabfConnector.js";
import { calculateWeaponAttack } from "./calculations/calculateWeaponAttack.js";
import { calculateWeaponBlock } from "./calculations/calculateWeaponBlock.js";
import { calculateWeaponDamage } from "./calculations/calculateWeaponDamage.js";
import { calculateWeaponReload } from "./calculations/calculateWeaponReload.js";
import { calculateWeaponIntegrity } from "./calculations/calculateWeaponIntegrity.js";
import { calculateWeaponBreaking } from "./calculations/calculateWeaponBreaking.js";
import { calculateWeaponPresence } from "./calculations/calculateWeaponPresence.js";
import { calculateWeaponRange } from "./calculations/calculateWeaponRange.js";
import { calculateWeaponInitiative } from "./calculations/calculateWeaponInitiative.js";
import {eliminateRedundantCriticals} from "./util/eliminateRedundantCriticals.js";
const mutateWeaponsData = (data) => {
  const combat = data.combat;
  combat.weapons = combat.weapons.map((weapon) => {
    weapon.system.attack = {
      base: weapon.system.attack.base,
      mod: weapon.system.attack.mod,
      special: weapon.system.attack.special,
      final: { value: calculateWeaponAttack(weapon, data) }
    };
    weapon.system.block = {
      base: weapon.system.block.base,
      mod: weapon.system.block.mod,
      special: weapon.system.block.special,
      final: { value: calculateWeaponBlock(weapon, data) }
    };
    weapon.system.initiative = {
      base: weapon.system.initiative.base,
      mod: weapon.system.initiative.mod,
      final: { value: calculateWeaponInitiative(weapon) }
    };
    weapon.system.damage = {
      base: weapon.system.damage.base,
      mod: weapon.system.damage.mod,
      final: {value: calculateWeaponDamage(weapon,data)}
    };
    weapon.system.integrity = {
      base: weapon.system.integrity.base,
      mod: weapon.system.integrity.mod,
      final: { value: calculateWeaponIntegrity(weapon) }
    };
    weapon.system.breaking = {
      base: weapon.system.breaking.base,
      mod: weapon.system.breaking.mod,
      final: { value: calculateWeaponBreaking(weapon, data) }
    };
    weapon.system.presence = {
      base: weapon.system.presence.base,
      final: { value: calculateWeaponPresence(weapon) }
    };
    weapon.system.critic = {
      primary: weapon.system.critic.primary,
      secondary: weapon.system.critic.secondary,
      other: eliminateRedundantCriticals(weapon)
    }
    if (weapon.system.isRanged.value) {
      weapon.system.range = {
        base: weapon.system.range.base,
        final: { value: calculateWeaponRange(weapon, data) }
      };
      if (weapon.system.shotType.value === WeaponShotType.SHOT) {
        weapon.system.reload = {
          base: weapon.system.reload.base,
          final: { value: calculateWeaponReload(weapon, data) }
        };
        if (weapon.system.ammo) {
          weapon.system.critic.primary.value = weapon.system.ammo.system.critic.value;
        }
      }
    }
    return weapon;
  });
};
export {
  mutateWeaponsData
};
