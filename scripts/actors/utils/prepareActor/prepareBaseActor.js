import { mutateWeaponsData } from "./base/items/weapon/mutateWeaponsData.js";
//import { mutatePrimaryModifiers } from "./base/actor/mutatePrimaryModifiers.js";
import { mutateTotalArmor } from "./base/actor/mutateTotalArmor.js";
//import { mutateAmmoData } from "./base/items/ammo/mutateAmmoData.js";
import { mutateArmorsData } from "./base/items/armor/mutateArmorsData.js";
import { mutatePhysicalModifier } from "./base/actor/modifiers/mutatePhysicalModifier.js";
import { mutateAllActionsModifier } from "./base/actor/modifiers/mutateAllActionsModifier.js";
import { mutateSecondariesData } from "./base/actor/secondaries/mutateSecondariesData.js";
import { mutateCombatData } from "./base/actor/combat/mutateCombatData.js";
import { mutateMovementType } from "./base/actor/general/mutateMovementType.js";
import { mutateMysticData } from "./base/actor/mystic/mutateMysticData.js";
import { mutatePsychicData } from "./base/actor/psychic/mutatePsychicData.js";
import { mutateDomineData } from "./base/actor/domine/mutateDomineData.js";
import { mutateInitiative } from "./base/actor/mutateInitiative.js";
import { mutateRegenerationType } from "./base/actor/general/mutateRegenerationType.js";
const DERIVED_DATA_FUNCTIONS = [
  mutateRegenerationType,
  mutateAllActionsModifier,
  mutateArmorsData,
  mutateTotalArmor,
  mutatePhysicalModifier,
  mutateCombatData,
  mutateMovementType,
  mutateSecondariesData,
  mutateWeaponsData,
  mutateInitiative,
  mutateMysticData,
  mutatePsychicData,
  mutateDomineData
];
const prepareBaseActiveActorModifiers = async (actor) => {
  const { system } = actor;
  for (const fn of DERIVED_DATA_FUNCTIONS) {
    await fn(system);
  }
};
export {
  prepareBaseActiveActorModifiers
};
