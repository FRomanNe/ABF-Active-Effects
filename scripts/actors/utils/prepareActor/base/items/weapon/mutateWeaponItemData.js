import { WeaponShotType } from "../../../../../../animabfConnector.js";
const mutateWeaponItemData = (weapon) => {
    weapon.system.attack = {
      base: weapon.system.attack.base,
      mod: {value:0},
      special: weapon.system.attack.special,
      final: weapon.system.attack.final
    };
    weapon.system.block = {
      base: weapon.system.block.base,
      mod: {value:0},
      special: weapon.system.block.special,
      final: weapon.system.block.final
    };
    weapon.system.initiative = {
      base: weapon.system.initiative.base,
      mod: {value:0},
      final: weapon.system.initiative.final
    };
    weapon.system.damage = {
      base: weapon.system.damage.base,
      mod: {value:0},
      final: weapon.system.damage.final
    };
    weapon.system.integrity = {
      base: weapon.system.integrity.base,
      mod: {value:0},
      final: weapon.system.integrity.final
    };
    weapon.system.breaking = {
      base: weapon.system.breaking.base,
      mod: {value:0},
      final: weapon.system.breaking.final
    };
    weapon.system.presence = {
      base: weapon.system.presence.base,
      final: weapon.system.presence.final
    };
    if (weapon.system.isRanged.value) {
      weapon.system.range = {
        base: weapon.system.range.base,
        final: weapon.system.range.final
      };
      if (weapon.system.shotType.value === WeaponShotType.SHOT) {
        weapon.system.reload = {
          base: weapon.system.reload.base,
          final: weapon.system.reload.final
        };
        if (weapon.system.ammo) {
          weapon.system.critic.primary.value = weapon.system.ammo.system.critic.value;
        }
      }
    }
    return weapon;
};
export {
  mutateWeaponItemData
};
