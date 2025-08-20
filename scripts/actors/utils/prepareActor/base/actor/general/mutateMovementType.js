const mutateMovementType = (data) => {
  const { movementType } = data.characteristics.secondaries;
  movementType.bonus = {value: 0};
};
export {
  mutateMovementType
};
