const mutateExtraDamageModifier = (data) => {
  let extra = data.general.modifiers.extraDamage;
  data.general.modifiers.extraDamage.final = extra.value + (extra.mod??0);
};
export {
  mutateExtraDamageModifier
};
