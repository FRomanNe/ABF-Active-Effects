//import { AdvantageItemConfig } from "../../../../../../systems/animabf/module/types/general/AdvantageItemConfig.js";
import { ArsMagnusItemConfig } from "../../../../../../systems/animabf/module/types/domine/ArsMagnusItemConfig.js";
import { CombatSpecialSkillItemConfig } from "../../../../../../systems/animabf/module/types/combat/CombatSpecialSkillItemConfig.js";
import { CombatTableItemConfig } from "../../../../../../systems/animabf/module/types/combat/CombatTableItemConfig.js";
import { ContactItemConfig } from "../../../../../../systems/animabf/module/types/general/ContactItemConfig.js";
import { CreatureItemConfig } from "../../../../../../systems/animabf/module/types/domine/CreatureItemConfig.js";
import { DisadvantageItemConfig } from "../../../../../../systems/animabf/module/types/general/DisadvantageItemConfig.js";
import { SpellItemConfig } from "../../../../../../systems/animabf/module/types/mystic/SpellItemConfig.js";
import { ElanItemConfig } from "../../../../../../systems/animabf/module/types/general/ElanItemConfig.js";
import { InnatePsychicPowerItemConfig } from "../../../../../../systems/animabf/module/types/psychic/InnatePsychicPowerItemConfig.js";
import { KiSkillItemConfig } from "../../../../../../systems/animabf/module/types/domine/KiSkillItemConfig.js";
import { LanguageItemConfig } from "../../../../../../systems/animabf/module/types/general/LanguageItemConfig.js";
import { LevelItemConfig } from "../../../../../../systems/animabf/module/types/general/LevelItemConfig.js";
import { MartialArtItemConfig } from "../../../../../../systems/animabf/module/types/domine/MartialArtItemConfig.js";
import { MentalPatternItemConfig } from "../../../../../../systems/animabf/module/types/psychic/MentalPatternItemConfig.js";
import { MetamagicItemConfig } from "../../../../../../systems/animabf/module/types/mystic/MetamagicItemConfig.js";
import { NemesisSkillItemConfig } from "../../../../../../systems/animabf/module/types/domine/NemesisSkillItemConfig.js";
import { NoteItemConfig } from "../../../../../../systems/animabf/module/types/general/NoteItemConfig.js";
import { PsychicDisciplineItemConfig } from "../../../../../../systems/animabf/module/types/psychic/PsychicDisciplineItemConfig.js";
import { PsychicPowerItemConfig } from "../../../../../../systems/animabf/module/types/psychic/PsychicPowerItemConfig.js";
import { SecondarySpecialSkillItemConfig } from "../../../../../../systems/animabf/module/types/secondaries/SecondarySpecialSkillItemConfig.js";
import { SelectedSpellItemConfig } from "../../../../../../systems/animabf/module/types/mystic/SelectedSpellItemConfig.js";
import { ActViaItemConfig } from "../../../../../../systems/animabf/module/types/mystic/ActViaItemConfig.js";
import { InnateMagicViaItemConfig } from "../../../../../../systems/animabf/module/types/mystic/InnateMagicViaItemConfig.js";
import { PreparedSpellItemConfig } from "../../../../../../systems/animabf/module/types/mystic/PreparedSpellItemConfig.js";
import { SpecialSkillItemConfig } from "../../../../../../systems/animabf/module/types/domine/SpecialSkillItemConfig.js";
import { SpellMaintenanceItemConfig } from "../../../../../../systems/animabf/module/types/mystic/SpellMaintenanceItemConfig.js";
import { SummonItemConfig } from "../../../../../../systems/animabf/module/types/mystic/SummonItemConfig.js";
//import { TechniqueItemConfig } from "../../../../../../systems/animabf/module/types/domine/TechniqueItemConfig.js";
import { TitleItemConfig } from "../../../../../../systems/animabf/module/types/general/TitleItemConfig.js";
//import { WeaponItemConfig } from "../../../../../../systems/animabf/module/types/combat/WeaponItemConfig.js";
//import { AmmoItemConfig } from "../../../../../../systems/animabf/module/types/combat/AmmoItemConfig.js";
import { ElanPowerItemConfig } from "../../../../../../systems/animabf/module/types/general/ElanPowerItemConfig.js";
//import { ArmorItemConfig } from "../../../../../../systems/animabf/module/types/combat/ArmorItemConfig.js";
import { SupernaturalShieldItemConfig } from "../../../../../../systems/animabf/module/types/combat/SupernaturalShieldItemConfig.js";
import { InventoryItemItemConfig } from "../../../../../../systems/animabf/module/types/general/InventoryItemItemConfig.js";

import {WeaponItemConfig} from "../../../Types/WeaponItemConfig.js";
import {ArmorItemConfig} from "../../../Types/ArmorItemConfig.js";
import {AmmoItemConfig} from "../../../Types/AmmoItemConfig.js";
import {TechniqueItemConfig} from "../../../Types/TechniqueItemConfig.js";
import {ActiveEffectItemConfig} from "../../../Types/ActiveEffectItemConfig.js";
import {AdvantageItemConfig} from "../../../Types/AdvantageItemConfig.js";
//import {KiSkillItemConfig} from "../../../Types/KiSkillConfig.js";

const INTERNAL_ITEM_CONFIGURATIONS = {
  [ArsMagnusItemConfig.type]: ArsMagnusItemConfig,
  [CombatSpecialSkillItemConfig.type]: CombatSpecialSkillItemConfig,
  [CombatTableItemConfig.type]: CombatTableItemConfig,
  [ContactItemConfig.type]: ContactItemConfig,
  [CreatureItemConfig.type]: CreatureItemConfig,
  [ElanItemConfig.type]: ElanItemConfig,
  [ElanPowerItemConfig.type]: ElanPowerItemConfig,
  [InnatePsychicPowerItemConfig.type]: InnatePsychicPowerItemConfig,
  [KiSkillItemConfig.type]: KiSkillItemConfig,
  [LanguageItemConfig.type]: LanguageItemConfig,
  [LevelItemConfig.type]: LevelItemConfig,
  [MartialArtItemConfig.type]: MartialArtItemConfig,
  [MetamagicItemConfig.type]: MetamagicItemConfig,
  [NemesisSkillItemConfig.type]: NemesisSkillItemConfig,
  [SecondarySpecialSkillItemConfig.type]: SecondarySpecialSkillItemConfig,
  [SelectedSpellItemConfig.type]: SelectedSpellItemConfig,
  [SpecialSkillItemConfig.type]: SpecialSkillItemConfig,
  [SpellMaintenanceItemConfig.type]: SpellMaintenanceItemConfig,
  [PreparedSpellItemConfig.type]: PreparedSpellItemConfig,
  [ActViaItemConfig.type]: ActViaItemConfig,
  [InnateMagicViaItemConfig.type]: InnateMagicViaItemConfig,
  [SummonItemConfig.type]: SummonItemConfig,
  [TitleItemConfig.type]: TitleItemConfig,
  [InventoryItemItemConfig.type]: InventoryItemItemConfig
};
const ITEM_CONFIGURATIONS = {
  [AmmoItemConfig.type]: AmmoItemConfig,
  [AdvantageItemConfig.type]: AdvantageItemConfig,
  [ArmorItemConfig.type]: ArmorItemConfig,
  [SupernaturalShieldItemConfig.type]: SupernaturalShieldItemConfig,
  [DisadvantageItemConfig.type]: DisadvantageItemConfig,
  [SpellItemConfig.type]: SpellItemConfig,
  [MentalPatternItemConfig.type]: MentalPatternItemConfig,
  [NoteItemConfig.type]: NoteItemConfig,
  [PsychicDisciplineItemConfig.type]: PsychicDisciplineItemConfig,
  [PsychicPowerItemConfig.type]: PsychicPowerItemConfig,
  [TechniqueItemConfig.type]: TechniqueItemConfig,
  [WeaponItemConfig.type]: WeaponItemConfig,
  //[ActiveEffectItemConfig.type]: ActiveEffectItemConfig
};
const ALL_ITEM_CONFIGURATIONS = {
  ...ITEM_CONFIGURATIONS,
  ...INTERNAL_ITEM_CONFIGURATIONS
};
export {
  ALL_ITEM_CONFIGURATIONS,
  INTERNAL_ITEM_CONFIGURATIONS,
  ITEM_CONFIGURATIONS,
};
