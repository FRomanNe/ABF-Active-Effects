const mutateCombatData = (data) => {
data.combat.attack.mod = {value: 0}; 
data.combat.block.mod = {value: 0}; 
data.combat.dodge.mod = {value: 0}; 
};
export {
  mutateCombatData
};
