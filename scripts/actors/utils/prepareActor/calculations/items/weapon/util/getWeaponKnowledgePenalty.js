import { WeaponKnowledgeType } from "../../../../../../../animabfConnector.js";
const getWeaponKnowledgePenalty = (weapon) => {
  switch (weapon.system.knowledgeType.value) {
    case WeaponKnowledgeType.SIMILAR:
      return -20;
    case WeaponKnowledgeType.MIXED:
      return -40;
    case WeaponKnowledgeType.DIFFERENT:
      return -60;
    default:
      return 0;
  }
};
export {
  getWeaponKnowledgePenalty
};
