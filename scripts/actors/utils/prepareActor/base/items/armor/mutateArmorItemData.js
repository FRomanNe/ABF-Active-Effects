const mutateArmorItemData= (armor) => {
    armor.system.cut = {
      base: armor.system.cut.base,
      mod: {value: 0},
      final: armor.system.cut.final
    };
    armor.system.cold = {
      base: armor.system.cold.base,
      mod: {value: 0},
      final: armor.system.cold.final
    };
    armor.system.heat = {
      base: armor.system.heat.base,
      mod: {value: 0},
      final: armor.system.heat.final
    };
    armor.system.electricity = {
      base: armor.system.electricity.base,
      mod: {value: 0},
      final: armor.system.electricity.final
    };
    armor.system.impact = {
      base: armor.system.impact.base,
      mod: {value: 0},
      final: armor.system.impact.final
    };
    armor.system.thrust = {
      base: armor.system.thrust.base,
      mod: {value: 0},
      final: armor.system.thrust.final
    };
    armor.system.energy = {
      base: armor.system.energy.base,
      mod: {value: 0},
      final: armor.system.energy.final
    };
    armor.system.integrity = {
      base: armor.system.integrity.base,
      final: armor.system.integrity.final
    };
    armor.system.presence = {
      base: armor.system.presence.base,
      final: armor.system.presence.final
    };
    armor.system.movementRestriction = {
      base: armor.system.movementRestriction.base,
      final: armor.system.movementRestriction.final
    };
    armor.system.naturalPenalty = {
      base: armor.system.naturalPenalty.base,
      final: armor.system.naturalPenalty.final
    };
    armor.system.perceptionPenalty = {
      base: armor.system.perceptionPenalty.base,
      final: armor.system.perceptionPenalty.final
    };
    armor.system.wearArmorRequirement = {
      base: armor.system.wearArmorRequirement.base,
      final: armor.system.wearArmorRequirement.final
    };
};
export {
  mutateArmorItemData
};
