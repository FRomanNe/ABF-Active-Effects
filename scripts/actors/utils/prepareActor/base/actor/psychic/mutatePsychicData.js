const mutatePsychicData = (data) => {
  const { psychic } = data;
  psychic.psychicProjection.mod = {value: 0};
  psychic.psychicProjection.imbalance.offensive.mod = {value: 0};
  psychic.psychicProjection.imbalance.defensive.mod = {value: 0};
  psychic.psychicPotential.mod = {value: 0};
};
export {
  mutatePsychicData
};
