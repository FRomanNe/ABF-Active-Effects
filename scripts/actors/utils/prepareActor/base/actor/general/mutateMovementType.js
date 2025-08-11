const mutateMovementType = (data) => {
  const { movementType } = data.characteristics.secondaries;
  movementType.mod = {value: 0};
};
export {
  mutateMovementType
};
