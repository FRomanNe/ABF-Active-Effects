const mutateRegenerationType = (data) => {
  const { regenerationType } = data.characteristics.secondaries;
  regenerationType.bonus = {value: 0};
};
export {
  mutateRegenerationType
};
