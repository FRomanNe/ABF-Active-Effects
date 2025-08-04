import { ArmorLocation } from "../../../../../types/combat/ArmorItemConfig.js";
const calculateTA = (tas) => {
  if (tas.length === 0) return 0;
  const orderedTas = new Int8Array([...tas]).sort().reverse();
  const maxTa = orderedTas[0];
  const sumOtherTas = orderedTas.slice(1).reduce((prev, curr) => prev + curr, 0);
  return maxTa + Math.floor(sumOtherTas / 2);
};
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
