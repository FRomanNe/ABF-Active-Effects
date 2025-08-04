const mutateCombatData = (data) => {
  data.combat.attack.final.value = data.combat.attack.base.value + data.combat.attack.mod.value + data.general.modifiers.allActions.final.value + data.general.modifiers.physicalActions.final.value;
  data.combat.block.final.value = data.combat.block.base.value + data.combat.block.mod.value + data.general.modifiers.allActions.final.value + data.general.modifiers.physicalActions.final.value;
  data.combat.dodge.final.value = data.combat.dodge.base.value + data.combat.dodge.mod.value + data.general.modifiers.allActions.final.value + data.general.modifiers.physicalActions.final.value;
};
export {
  mutateCombatData
};
