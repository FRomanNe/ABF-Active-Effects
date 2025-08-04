import { getWeaponKnowledgePenalty } from "../util/getWeaponKnowledgePenalty.js";
import { calculateStrengthRequiredPenalty } from "../util/calculateStrengthRequiredPenalty.js";
const calculateWeaponAttack = (weapon, data) => data.combat.attack.final.value + data.combat.attack.mod.value + weapon.system.attack.special.value + weapon.system.quality.value + getWeaponKnowledgePenalty(weapon) + calculateStrengthRequiredPenalty(weapon, data);
export {
  calculateWeaponAttack
};
