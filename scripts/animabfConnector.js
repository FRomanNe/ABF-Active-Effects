
import { calculateAttributeModifier } from "../../../systems/animabf/module/actor/utils/prepareActor/calculations/util/calculateAttributeModifier.js";
import { ABFActor} from "../../../systems/animabf/module/actor/ABFActor.js";
import ABFActorSheet from "../../../systems/animabf/module/actor/ABFActorSheet.js";
import { nanoid } from "../../../systems/animabf/vendor/nanoid/nanoid.js";
import { WeaponEquippedHandType,WeaponKnowledgeType,WeaponCritic,NoneWeaponCritic,WeaponManageabilityType,
WeaponShotType,WeaponSize,WeaponSizeProportion} from "../../../systems/animabf/module/types/combat/WeaponItemConfig.js";
import { ArmorLocation,ArmorType } from "../../../systems/animabf/module/types/combat/ArmorItemConfig.js";
import { INITIAL_AMMO_DATA } from "../../../systems/animabf/module/types/combat/AmmoItemConfig.js";
import {ABFItems} from "../../../systems/animabf/module/items/ABFItems.js";
import { ABFItemConfigFactory } from "../../../systems/animabf/module/types/ABFItemConfig.js"
import { mutateWeapon } from "../../../systems/animabf/module/items/utils/prepareItem/items/mutateWeapon.js";
import { openSimpleInputDialog ,openModDialog } from "../../../systems/animabf/module/utils/dialogs/openSimpleInputDialog.js";
import ABFItemSheet from "../../../systems/animabf/module/items/ABFItemSheet.js";
import { ABFDialogs } from "../../../systems/animabf/module/dialogs/ABFDialogs.js";
import {Logger} from "../../../systems/animabf/utils/log.js";
import {WSCombatManager} from "../../../systems/animabf/module/combat/websocket/ws-combat/WSCombatManager.js";
import { PromptDialog } from "../../../systems/animabf/module/dialogs/PromptDialog.js";
import { assertCurrentScene } from "../../../systems/animabf/module/combat/websocket/ws-combat/util/assertCurrentScene.js";
import { assertGMActive } from "../../../systems/animabf/module/combat/websocket/ws-combat/util/assertGMActive.js";
import { getSelectedToken } from "../../../systems/animabf/module/combat/websocket/ws-combat/util/getSelectedToken.js";
import { getTargetToken } from "../../../systems/animabf/module/combat/websocket/ws-combat/util/getTargetToken.js";
import {canOwnerReceiveMessage} from "../../../systems/animabf/module/combat/websocket/ws-combat/util/canOwnerReceiveMessage.js"
import { Templates } from "../../../systems/animabf/module/utils/constants.js";
import ABFFoundryRoll from "../../../systems/animabf/module/rolls/ABFFoundryRoll.js";
import { ABFSettingsKeys } from "../../../systems/animabf/utils/registerSettings.js";
import { ABFConfig } from "../../../systems/animabf/module/ABFConfig.js";
import { executeMacro } from "../../../systems/animabf/module/utils/functions/executeMacro.js";
import {CombatDialogs} from "../../../systems/animabf/module/combat/websocket/dialogs/CombatDialogs.js";
//Combat Utils
import { damageCheck } from "../../../systems/animabf/module/combat/utils/damageCheck.js";
import { resistanceEffectCheck } from "../../../systems/animabf/module/combat/utils/resistanceEffectCheck.js";
import { roundTo5Multiples } from "../../../systems/animabf/module/combat/utils/roundTo5Multiples.js";
import {calculateCombatResult} from "../../../systems/animabf/module/combat/utils/calculateCombatResult.js";
import {calculateATReductionByQuality} from "../../../systems/animabf/module/combat/utils/calculateATReductionByQuality.js";
import {defensesCounterCheck} from "../../../systems/animabf/module/combat/utils/defensesCounterCheck.js";


export{
calculateAttributeModifier,
nanoid,

WeaponEquippedHandType,WeaponKnowledgeType,WeaponCritic,NoneWeaponCritic,WeaponManageabilityType,WeaponShotType,WeaponSize,WeaponSizeProportion,
ArmorLocation,ArmorType,
mutateWeapon,

INITIAL_AMMO_DATA,
ABFItems,
ABFItemConfigFactory,
openSimpleInputDialog,openModDialog,
ABFDialogs,
ABFItemSheet,
ABFActor,
ABFActorSheet,
Logger,
Templates,
WSCombatManager,
PromptDialog,
ABFFoundryRoll,
ABFSettingsKeys,ABFConfig,executeMacro,
CombatDialogs,

resistanceEffectCheck,damageCheck,roundTo5Multiples,calculateCombatResult,calculateATReductionByQuality,defensesCounterCheck,

assertCurrentScene,assertGMActive,getSelectedToken,getTargetToken,canOwnerReceiveMessage
  };

