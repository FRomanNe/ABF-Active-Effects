import { calculateArmorIntegrity } from "./calculations/calculateArmorIntegrity.js";
import { calculateArmorPresence } from "./calculations/calculateArmorPresence.js";
import { calculateArmorTA } from "./calculations/calculateArmorTA.js";
import { calculateArmorMovementRestriction } from "./calculations/calculateArmorMovementRestriction.js";
import { calculateArmorNaturalPenalty } from "./calculations/calculateArmorNaturalPenalty.js";
import { calculateArmorPerceptionPenalty } from "./calculations/calculateArmorPerceptionPenalty.js";
import { calculateArmorWearArmorRequirement } from "./calculations/calculateArmorWearArmorRequirement.js";
const mutateArmorsData = (data) => {
  const combat = data.combat;
  combat.armors = combat.armors.map((armor) => {
    armor.system.cut = {
      base: armor.system.cut.base,
      mod: armor.system.cut.mod,
      final: { value: calculateArmorTA(armor, armor.system.cut.base.value) +  (armor.system.cut.mod?.value ?? 0) }
    };
    armor.system.cold = {
      base: armor.system.cold.base,
      mod: armor.system.cold.mod,
      final: { value: calculateArmorTA(armor, armor.system.cold.base.value) + (armor.system.cold.mod?.value ?? 0) }
    };
    armor.system.heat = {
      base: armor.system.heat.base,
      mod: armor.system.heat.mod,
      final: { value: calculateArmorTA(armor, armor.system.heat.base.value) + (armor.system.heat.mod?.value ?? 0) }
    };
    armor.system.electricity = {
      base: armor.system.electricity.base,
      mod: armor.system.electricity.mod,
      final: { value: calculateArmorTA(armor, armor.system.electricity.base.value) + (armor.system.electricity.mod?.value ?? 0) }
    };
    armor.system.impact = {
      base: armor.system.impact.base,
      mod: armor.system.impact.mod,
      final: { value: calculateArmorTA(armor, armor.system.impact.base.value) + (armor.system.impact.mod?.value ?? 0) }
    };
    armor.system.thrust = {
      base: armor.system.thrust.base,
      mod: armor.system.thrust.mod,
      final: { value: calculateArmorTA(armor, armor.system.thrust.base.value) + (armor.system.thrust.mod?.value ?? 0) }
    };
    if (armor.system.isEnchanted.value) {
      armor.system.energy = {
        base: armor.system.energy.base,
        mod: armor.system.energy.mod,
        final: { value: calculateArmorTA(armor, armor.system.energy.base.value) + (armor.system.energy.mod?.value ?? 0) }
      };
    } else {
      armor.system.energy = {
        base: armor.system.energy.base,
        mod: armor.system.energy.mod,
        final: {value: armor.system.energy.base.value + (armor.system.energy.mod?.value ?? 0)}
      };
    }
    armor.system.integrity = {
      base: armor.system.integrity.base,
      final: { value: calculateArmorIntegrity(armor) }
    };
    armor.system.presence = {
      base: armor.system.presence.base,
      final: { value: calculateArmorPresence(armor) }
    };
    armor.system.movementRestriction = {
      base: armor.system.movementRestriction.base,
      final: { value: calculateArmorMovementRestriction(armor) }
    };
    armor.system.naturalPenalty = {
      base: armor.system.naturalPenalty.base,
      final: { value: calculateArmorNaturalPenalty(armor) }
    };
    armor.system.perceptionPenalty = {
      base: armor.system.perceptionPenalty.base,
      final: { value: calculateArmorPerceptionPenalty(armor) }
    };
    armor.system.wearArmorRequirement = {
      base: armor.system.wearArmorRequirement.base,
      final: { value: calculateArmorWearArmorRequirement(armor) }
    };
    return armor;
  });
};
export {
  mutateArmorsData
};
