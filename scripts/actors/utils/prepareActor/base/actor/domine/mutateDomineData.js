const mutateDomineData = async (data) => {
  const allActionsPenalty = data.general.modifiers.allActions.final.value;
  const { domine } = data;
  const KI_ACCUMULATIONS = [
    "strength",
    "agility",
    "dexterity",
    "constitution",
    "willPower",
    "power"
  ];
  for (const accum of KI_ACCUMULATIONS) {
    domine.kiAccumulation[accum].mod = {value: 0};
  }
};
export {
  mutateDomineData
};
