const mutateTotalArmor = (data) => {
  data.combat.bonusArmor =
  {
    at: {
            cut: {
            value: 0
            },
            impact: {
            value: 0
            },
            thrust: {
            value: 0
            },
            heat: {
            value: 0
            },
            electricity: {
            value: 0
            },
            cold: {
            value: 0
            },
            energy: {
            value: 0
            }
        }
  };
};
export {
  mutateTotalArmor
};
