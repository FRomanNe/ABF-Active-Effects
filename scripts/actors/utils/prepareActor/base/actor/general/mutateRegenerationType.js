const mutateRegenerationType = (data) => {
  const { regenerationType } = data.characteristics.secondaries;
  regenerationType.mod = {value: 0};
};
export {
  mutateRegenerationType
};
