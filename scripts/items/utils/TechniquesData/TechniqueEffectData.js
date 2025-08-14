import { Frequency,Type,CHAR,Elements,TargetTypes } from "./constants.js";
import { WeaponCritic } from "../../../animabfConnector.js";

// ADD: 2
// CUSTOM: 0
// DOWNGRADE: 3
// MULTIPLY: 1
// OVERRIDE: 5
// UPGRADE: 4

const Attack =
{
    id: "Attack",
    name: "ABFae.Domine.Attack",
    fieldPath: "system.combat.attack.mod.value",
    target: TargetTypes.ACTOR,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:10,first:2,second:4,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:25,first:3,second:5,mk:5,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:40,first:4,second:6,mk:10,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:50,first:5,second:8,mk:15,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:75,first:9,second:12,mk:20,mant:6,SM:{SMe:12,SMa:21},level:1},
        {value:90,first:12,second:15,mk:25,mant:8,SM:{SMe:16,SMa:28},level:1},
        {value:100,first:14,second:18,mk:30,mant:10,SM:{SMe:20,SMa:35},level:1},
        {value:125,first:18,second:22,mk:35,mant:12,SM:{SMe:24,SMa:42},level:2},
        {value:150,first:22,second:26,mk:40,mant:14,SM:{SMe:28,SMa:49},level:2},
        {value:175,first:26,second:32,mk:45,mant:16,SM:{SMe:32,SMa:""},level:3},
        {value:200,first:30,second:36,mk:50,mant:18,SM:{SMe:36,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.ACTION,
    type: Type.ATTACK,
    elements:  [Elements.AIR,Elements.FIRE,Elements.DARK],
    primary: CHAR.DEX,
    characteristics:{
        [CHAR.AGI]:2,
        [CHAR.STR]:2,
        [CHAR.POW]:2,
        [CHAR.WIL]:3
    }
}

const AttackFull =
{
    id: "AttackFull",
    name: "ABFae.Domine.AttackFull",
    fieldPath: "system.combat.attack.mod.value",
    target: TargetTypes.ACTOR,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:10,first:4,second:6,mk:10,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:25,first:8,second:11,mk:15,mant:5,SM:{SMe:10,SMa:18},level:1},
        {value:40,first:10,second:13,mk:20,mant:8,SM:{SMe:16,SMa:28},level:1},
        {value:50,first:12,second:15,mk:30,mant:10,SM:{SMe:20,SMa:35},level:2},
        {value:75,first:18,second:22,mk:50,mant:14,SM:{SMe:28,SMa:49},level:2},
        {value:90,first:24,second:29,mk:60,mant:18,SM:{SMe:36,SMa:""},level:3},
        {value:100,first:28,second:32,mk:70,mant:20,SM:{SMe:40,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.TURN,
    type: Type.ATTACK,
    elements:  [Elements.AIR,Elements.FIRE,Elements.DARK],
    primary: CHAR.DEX,
    characteristics:{
        [CHAR.AGI]:2,
        [CHAR.STR]:2,
        [CHAR.POW]:2,
        [CHAR.WIL]:3
    }
}
const AttackSub =
{
    id: "AttackSub",
    name: "ABFae.Domine.AttackSub",
    fieldPath: "system.combat.attack.final.value",
    target: TargetTypes.ACTOR,
    flag: {key: "withoutRoll",value:{on:true,off:false}},
    mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
    tiers: [
        {value:80,first:2,second:4,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:120,first:4,second:6,mk:5,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:140,first:6,second:9,mk:5,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:180,first:8,second:11,mk:10,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:240,first:12,second:15,mk:15,mant:6,SM:{SMe:12,SMa:21},level:1},
        {value:280,first:16,second:20,mk:25,mant:8,SM:{SMe:16,SMa:28},level:2},
        {value:320,first:20,second:24,mk:35,mant:10,SM:{SMe:20,SMa:35},level:2},
        {value:440,first:26,second:32,mk:45,mant:12,SM:{SMe:24,SMa:""},level:3},
    ],
    override: true,
    frequency:  Frequency.ACTION,
    type: Type.ATTACK,
    elements:  [Elements.LIGHT,Elements.DARK,Elements.EARTH],
    primary: CHAR.POW,
    characteristics:{
        [CHAR.AGI]:2,
        [CHAR.STR]:2,
        [CHAR.STR]:3,
        [CHAR.WIL]:1
    }
}

const Counterattack =
{
    id: "Counterattack",
    name: "ABFae.Domine.Counterattack",
    target: TargetTypes.ACTOR,
    flags: {key:"counterattackBonus",value:{on:"value",off:0}},
    tiers: [
        {value:10,first:1,second:2,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:25,first:2,second:4,mk:5,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:40,first:3,second:5,mk:10,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:50,first:4,second:6,mk:10,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:75,first:6,second:9,mk:15,mant:6,SM:{SMe:12,SMa:21},level:1},
        {value:90,first:9,second:12,mk:20,mant:8,SM:{SMe:16,SMa:28},level:1},
        {value:100,first:12,second:15,mk:25,mant:10,SM:{SMe:20,SMa:35},level:1},
        {value:125,first:14,second:18,mk:30,mant:12,SM:{SMe:24,SMa:42},level:2},
        {value:150,first:18,second:22,mk:35,mant:14,SM:{SMe:28,SMa:49},level:2},
        {value:175,first:22,second:26,mk:40,mant:16,SM:{SMe:32,SMa:""},level:3},
        {value:200,first:26,second:32,mk:45,mant:18,SM:{SMe:36,SMa:""},level:3},
    ],
    valueStart: "+",
    frequency:  Frequency.ACTION,
    type: Type.ATTACK,
    elements:  [Elements.WATER,Elements.AIR,Elements.EARTH],
    primary: CHAR.DEX,
    characteristics:{
        [CHAR.AGI]:2,
        [CHAR.STR]:2,
        [CHAR.POW]:2,
        [CHAR.WIL]:3
    }
}
//Apuntar
//Apuntar real
//Ataque Indirecto
//Camuflar Ataque

const Block =
{
    id: "Block",
    name: "ABFae.Domine.Block",
    fieldPath: "system.combat.block.mod.value",
    target: TargetTypes.ACTOR,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:10,first:2,second:4,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:25,first:3,second:5,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:40,first:4,second:6,mk:10,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:50,first:5,second:8,mk:15,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:75,first:9,second:12,mk:20,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:90,first:12,second:15,mk:25,mant:5,SM:{SMe:10,SMa:21},level:1},
        {value:100,first:14,second:18,mk:30,mant:8,SM:{SMe:16,SMa:28},level:1},
        {value:125,first:18,second:22,mk:35,mant:10,SM:{SMe:20,SMa:35},level:2},
        {value:150,first:22,second:26,mk:40,mant:12,SM:{SMe:24,SMa:42},level:2},
        {value:175,first:26,second:32,mk:45,mant:14,SM:{SMe:28,SMa:""},level:3},
        {value:200,first:30,second:36,mk:50,mant:16,SM:{SMe:32,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.ACTION,
    type: Type.DEFENSE,
    elements:  [Elements.WATER,Elements.LIGHT,Elements.EARTH],
    primary: CHAR.DEX,
    characteristics:{
        [CHAR.AGI]:2,
        [CHAR.STR]:2,
        [CHAR.POW]:2,
        [CHAR.WIL]:3
    }
}

const BlockFull =
{
    id: "BlockFull",
    name: "ABFae.Domine.BlockFull",
    fieldPath: "system.combat.block.mod.value",
    target: TargetTypes.ACTOR,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:10,first:4,second:6,mk:10,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:25,first:6,second:9,mk:15,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:40,first:9,second:12,mk:20,mant:6,SM:{SMe:12,SMa:21},level:1},
        {value:50,first:12,second:15,mk:35,mant:9,SM:{SMe:28,SMa:32},level:2},
        {value:75,first:18,second:22,mk:50,mant:12,SM:{SMe:24,SMa:42},level:2},
        {value:90,first:26,second:32,mk:65,mant:15,SM:{SMe:32,SMa:""},level:3},
        {value:100,first:30,second:36,mk:75,mant:18,SM:{SMe:36,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.TURN,
    type: Type.DEFENSE,
    elements:  [Elements.WATER,Elements.LIGHT,Elements.EARTH],
    primary: CHAR.DEX,
    characteristics:{
        [CHAR.AGI]:2,
        [CHAR.STR]:2,
        [CHAR.POW]:2,
        [CHAR.WIL]:3
    }
}
//Parada Limitada
const Dodge =
{
    id: "Dodge",
    name: "ABFae.Domine.Dodge",
    fieldPath: "system.combat.dodge.mod.value",
    target: TargetTypes.ACTOR,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:10,first:2,second:4,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:25,first:3,second:5,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:40,first:4,second:6,mk:10,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:50,first:5,second:8,mk:15,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:75,first:9,second:12,mk:20,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:90,first:12,second:15,mk:25,mant:5,SM:{SMe:10,SMa:21},level:1},
        {value:100,first:14,second:18,mk:30,mant:8,SM:{SMe:16,SMa:28},level:1},
        {value:125,first:18,second:22,mk:35,mant:10,SM:{SMe:20,SMa:35},level:2},
        {value:150,first:22,second:26,mk:40,mant:12,SM:{SMe:24,SMa:42},level:2},
        {value:175,first:26,second:32,mk:45,mant:14,SM:{SMe:28,SMa:""},level:3},
        {value:200,first:30,second:36,mk:50,mant:16,SM:{SMe:32,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.ACTION,
    type: Type.DEFENSE,
    elements:  [Elements.WATER,Elements.AIR,Elements.LIGHT],
    primary: CHAR.AGI,
    characteristics:{
        [CHAR.CON]:2,
        [CHAR.DEX]:2,
        [CHAR.POW]:2,
        [CHAR.WIL]:3
    }
}

const DodgeFull =
{
    id: "DodgeFull",
    name: "ABFae.Domine.DodgeFull",
    fieldPath: "system.combat.dodge.mod.value",
    target: TargetTypes.ACTOR,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:10,first:4,second:6,mk:10,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:25,first:6,second:9,mk:15,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:40,first:9,second:12,mk:20,mant:6,SM:{SMe:12,SMa:21},level:1},
        {value:50,first:12,second:15,mk:35,mant:9,SM:{SMe:28,SMa:32},level:2},
        {value:75,first:18,second:22,mk:50,mant:12,SM:{SMe:24,SMa:42},level:2},
        {value:90,first:26,second:32,mk:65,mant:15,SM:{SMe:32,SMa:""},level:3},
        {value:100,first:30,second:36,mk:75,mant:18,SM:{SMe:36,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.TURN,
    type: Type.DEFENSE,
    elements:  [Elements.WATER,Elements.AIR,Elements.LIGHT],
    primary: CHAR.AGI,
    characteristics:{
        [CHAR.CON]:2,
        [CHAR.DEX]:2,
        [CHAR.POW]:2,
        [CHAR.WIL]:3
    }
}

const Damage =
{
    id: "Damage",
    name: "ABFae.Domine.Damage",
    fieldPath: "system.damage.mod.value",
    target: TargetTypes.WEAPON,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:10,first:1,second:2,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:25,first:2,second:4,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:40,first:3,second:5,mk:10,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:50,first:4,second:6,mk:15,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:75,first:6,second:9,mk:20,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:90,first:8,second:11,mk:25,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:100,first:10,second:13,mk:30,mant:5,SM:{SMe:10,SMa:18},level:1},
        {value:125,first:14,second:18,mk:35,mant:6,SM:{SMe:12,SMa:21},level:2},
        {value:150,first:16,second:20,mk:40,mant:8,SM:{SMe:16,SMa:28},level:2},
        {value:175,first:18,second:22,mk:45,mant:10,SM:{SMe:20,SMa:""},level:3},
        {value:200,first:20,second:24,mk:50,mant:12,SM:{SMe:24,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.ACTION,
    type: Type.ATTACK,
    elements:  [Elements.FIRE,Elements.EARTH],
    primary: CHAR.STR,
    characteristics:{
        [CHAR.CON]:1,
        [CHAR.DEX]:3,
        [CHAR.POW]:2,
        [CHAR.WIL]:1
    }
}
const DamageFull = {
    id: "DamageFull",
    name: "ABFae.Domine.DamageFull",
    fieldPath: "system.general.modifiers.extraDamage.mod",
    target: TargetTypes.WEAPON,
    mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
    tiers: [
        {value:10,first:2,second:4,mk:10,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:25,first:3,second:5,mk:15,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:40,first:5,second:8,mk:20,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:50,first:7,second:10,mk:25,mant:4,SM:{SMe:8,SMa:14},level:2},
        {value:75,first:10,second:13,mk:35,mant:6,SM:{SMe:12,SMa:21},level:2},
        {value:90,first:12,second:15,mk:40,mant:8,SM:{SMe:16,SMa:""},level:3},
        {value:100,first:14,second:18,mk:50,mant:10,SM:{SMe:20,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.TURN,
    type: Type.ATTACK,
    elements:  [Elements.FIRE,Elements.EARTH],
    primary: CHAR.STR,
    characteristics:{
        [CHAR.CON]:1,
        [CHAR.DEX]:3,
        [CHAR.POW]:2,
        [CHAR.WIL]:2
    }
}
const DamageSub =
{
    id: "DamageSub",
    name: "ABFae.Domine.DamageSub",
    fieldPath: "system.damage.final.value",
    target: TargetTypes.WEAPON,
    mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
    tiers: [
        {value:50,first:1,second:2,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:100,first:3,second:5,mk:10,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:120,first:5,second:8,mk:15,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:150,first:7,second:10,mk:20,mant:5,SM:{SMe:10,SMa:18},level:2},
        {value:180,first:9,second:12,mk:25,mant:7,SM:{SMe:14,SMa:11},level:2},
        {value:200,first:12,second:15,mk:30,mant:9,SM:{SMe:18,SMa:18},level:3},
        {value:250,first:15,second:19,mk:35,mant:12,SM:{SMe:24,SMa:25},level:3},
    ],
    override: true,
    frequency:  Frequency.ACTION,
    type: Type.ATTACK,
    elements:  [Elements.FIRE,Elements.EARTH],
    primary: CHAR.STR,
    characteristics:{
        [CHAR.CON]:1,
        [CHAR.DEX]:3,
        [CHAR.POW]:2,
        [CHAR.WIL]:2
    }
}
const DamageMult = {
    id: "DamageMult",
    name: "ABFae.Domine.DamageMult",
    fieldPath: "system.damage.final.value",
    target: TargetTypes.WEAPON,
    mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
    tiers: [
        {value:2,first:10,second:15,mk:25,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:3,first:15,second:20,mk:40,mant:8,SM:{SMe:16,SMa:28},level:2},
        {value:4,first:20,second:30,mk:80,mant:12,SM:{SMe:24,SMa:""},level:3}
    ],
    override: true,
    valueStart: "x",
    frequency:  Frequency.ACTION,
    type: Type.ATTACK,
    elements:  [Elements.FIRE,Elements.EARTH],
    primary: CHAR.STR,
    characteristics:{
        [CHAR.CON]:2,
        [CHAR.DEX]:3,
        [CHAR.POW]:1,
        [CHAR.WIL]:1
    }
} 

const Initiative =
{
    id: "Initiative",
    name: "ABFae.Domine.Initiative",
    fieldPath: "system.characteristics.secondaries.initiative.mod.value",
    target: TargetTypes.ACTOR,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:25,first:1,second:2,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:50,first:2,second:4,mk:10,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:75,first:4,second:6,mk:15,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:100,first:6,second:9,mk:20,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:125,first:8,second:11,mk:25,mant:4,SM:{SMe:8,SMa:14},level:2},
        {value:150,first:10,second:13,mk:30,mant:5,SM:{SMe:10,SMa:18},level:2},
        {value:175,first:12,second:15,mk:35,mant:6,SM:{SMe:12,SMa:""},level:3},
        {value:200,first:14,second:18,mk:40,mant:7,SM:{SMe:14,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.TURN,
    type: Type.START,
    elements:  [Elements.AIR],
    primary: CHAR.AGI,
    characteristics:{
        [CHAR.CON]:2,
        [CHAR.DEX]:1,
        [CHAR.POW]:3,
        [CHAR.WIL]:3
    }
}
const Breakage =
{
    id: "Breakage",
    name: "ABFae.Domine.Breakage",
    fieldPath: "system.breaking.mod.value",
    target: TargetTypes.WEAPON,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:5,first:1,second:2,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:10,first:2,second:4,mk:10,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:15,first:4,second:6,mk:15,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:20,first:6,second:9,mk:20,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:25,first:8,second:11,mk:25,mant:4,SM:{SMe:8,SMa:14},level:2},
        {value:30,first:12,second:15,mk:30,mant:5,SM:{SMe:10,SMa:18},level:2},
        {value:35,first:14,second:18,mk:35,mant:6,SM:{SMe:12,SMa:21},level:2},
        {value:40,first:18,second:22,mk:40,mant:8,SM:{SMe:16,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.TURN,
    type: Type.ATTACK,
    elements:  [Elements.FIRE,Elements.EARTH],
    primary: CHAR.STR,
    characteristics:{
        [CHAR.CON]:2,
        [CHAR.DEX]:4,
        [CHAR.POW]:2,
        [CHAR.WIL]:1
    }
}
const Fortitude =
{
    id: "Fortitude",
    name: "ABFae.Domine.Fortitude",
    fieldPath: "system.fortitude.mod.value",
    target: TargetTypes.WEAPON,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:10,first:1,second:2,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:15,first:2,second:4,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:20,first:3,second:5,mk:10,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:25,first:4,second:6,mk:10,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:30,first:5,second:8,mk:15,mant:3,SM:{SMe:6,SMa:11},level:2},
        {value:35,first:6,second:9,mk:20,mant:3,SM:{SMe:6,SMa:11},level:2},
        {value:40,first:7,second:10,mk:25,mant:4,SM:{SMe:8,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.TURN,
    type: Type.DEFENSE,
    elements:  [Elements.FIRE,Elements.LIGHT,Elements.EARTH],
    primary: CHAR.CON,
    characteristics:{
        [CHAR.STR]:2,
        [CHAR.DEX]:4,
        [CHAR.POW]:2,
        [CHAR.WIL]:1
    }
}

const Movement =
{
    id: "Movement",
    name: "ABFae.Domine.Movement",
    fieldPath: "system.characteristics.secondaries.movementType.mod.value",
    target: TargetTypes.ACTOR,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {value:1,first:1,second:2,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:2,first:2,second:4,mk:10,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:3,first:4,second:6,mk:15,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:4,first:6,second:9,mk:20,mant:4,SM:{SMe:8,SMa:14},level:2},
        {value:5,first:8,second:11,mk:25,mant:5,SM:{SMe:10,SMa:""},level:3},
    ],
    override: false,
    valueStart: "+",
    frequency:  Frequency.TURN,
    type: Type.VARIABLE,
    elements:  [Elements.AIR,Elements.FIRE,Elements.LIGHT],
    primary: CHAR.AGI,
    characteristics:{
        [CHAR.STR]:1,
        [CHAR.DEX]:2,
        [CHAR.POW]:3,
        [CHAR.WIL]:3
    }
}

const ElementalAttack =
{
    id: "ElementalAttack",
    name: "ABFae.Domine.ElementalAttack",
    fieldPath: "system.critic.other",
    target: TargetTypes.WEAPON,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {text:"Fire", value:WeaponCritic.HEAT,first:2,second:4,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {text:"Water", value:WeaponCritic.COLD,first:2,second:4,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {text:"Air", value:WeaponCritic.ELECTRICITY,first:2,second:4,mk:5,mant:2,SM:{SMe:2,SMa:4},level:1},
        {text:"Earth", value:[WeaponCritic.IMPACT,WeaponCritic.THRUST,WeaponCritic.CUT],first:2,second:4,mk:5,mant:2,SM:{SMe:2,SMa:4},level:1},
    ],
    override: false,
    frequency:  Frequency.TURN,
    type: Type.ATTACK,
    elements:  [],
    primary: CHAR.POW,
    characteristics:{
        [CHAR.CON]:2,
        [CHAR.DEX]:3,
        [CHAR.STR]:3,
        [CHAR.WIL]:1
    }
}
const SupernaturalAttack =
{
    id: "SupernaturalAttack",
    name: "ABFae.Domine.SupernaturalAttack",
    fieldPath: "system.critic.other",
    target: TargetTypes.WEAPON,
    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
    tiers: [
        {text:"Energy", value:WeaponCritic.ENERGY,first:5,second:8,mk:10,mant:1,SM:{SMe:2,SMa:4},level:1},
    ],
    override: false,
    frequency:  Frequency.ACTION,
    type: Type.ATTACK,
    elements:  [Elements.LIGHT,Elements.DARK],
    primary: CHAR.POW,
    characteristics:{
        [CHAR.CON]:2,
        [CHAR.DEX]:3,
        [CHAR.STR]:3,
        [CHAR.WIL]:1
    }
}
const Critical =
{
    id: "Critical",
    name: "ABFae.Domine.Critical",
    target: TargetTypes.ACTOR,
    flags: {key:"criticalBonus",value:{on:"value",off:0}},
    tiers: [
        {value:10,first:2,second:4,mk:5,mant:1,SM:{SMe:2,SMa:4},level:1},
        {value:25,first:3,second:5,mk:5,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:40,first:4,second:6,mk:10,mant:3,SM:{SMe:6,SMa:11},level:1},
        {value:50,first:5,second:8,mk:15,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:75,first:8,second:11,mk:20,mant:6,SM:{SMe:12,SMa:21},level:1},
        {value:90,first:12,second:15,mk:25,mant:8,SM:{SMe:16,SMa:28},level:1},
        {value:100,first:14,second:18,mk:30,mant:10,SM:{SMe:20,SMa:35},level:1},
        {value:125,first:18,second:22,mk:35,mant:12,SM:{SMe:24,SMa:42},level:2},
        {value:150,first:22,second:26,mk:40,mant:14,SM:{SMe:28,SMa:49},level:2},
        {value:175,first:26,second:32,mk:45,mant:16,SM:{SMe:32,SMa:""},level:3},
        {value:200,first:30,second:36,mk:50,mant:18,SM:{SMe:36,SMa:""},level:3},
    ],
    valueStart: "+",
    frequency:  Frequency.ACTION,
    type: Type.ATTACK,
    elements:  [Elements.FIRE,Elements.EARTH],
    primary: CHAR.POW,
    characteristics:{
        [CHAR.CON]:2,
        [CHAR.DEX]:2,
        [CHAR.STR]:1,
        [CHAR.WIL]:1
    }
}
const CriticalFull =
{
    id: "CriticalFull",
    name: "ABFae.Domine.CriticalFull",
    target: TargetTypes.ACTOR,
    flags: {key:"criticalBonus",value:{on:"value",off:0}},
    tiers: [
        {value:10,first:3,second:5,mk:10,mant:2,SM:{SMe:4,SMa:7},level:1},
        {value:25,first:5,second:8,mk:20,mant:4,SM:{SMe:8,SMa:14},level:1},
        {value:40,first:7,second:9,mk:25,mant:6,SM:{SMe:12,SMa:21},level:1},
        {value:50,first:9,second:12,mk:35,mant:8,SM:{SMe:16,SMa:28},level:2},
        {value:75,first:12,second:15,mk:50,mant:10,SM:{SMe:20,SMa:35},level:2},
        {value:90,first:16,second:20,mk:60,mant:12,SM:{SMe:24,SMa:""},level:3},
        {value:100,first:18,second:22,mk:65,mant:14,SM:{SMe:28,SMa:""},level:3},
    ],
    valueStart: "+",
    frequency:  Frequency.ACTION,
    type: Type.ATTACK,
    elements:  [Elements.FIRE,,Elements.EARTH],
    primary: CHAR.POW,
    characteristics:{
        [CHAR.CON]:2,
        [CHAR.DEX]:2,
        [CHAR.STR]:1,
        [CHAR.WIL]:1
    }
}

const ALL_TECHNIQUE_EFFECTS={
    [Attack.id]: Attack,
    [AttackFull.id]: AttackFull,
    [AttackSub.id]: AttackSub,
    [Counterattack.id]: Counterattack,
    [Block.id]: Block,
    [BlockFull.id]: BlockFull,
    [Dodge.id]: Dodge,
    [DodgeFull.id]: DodgeFull,
    [Damage.id]: Damage,
    [DamageFull.id]: DamageFull,
    [DamageSub.id]: DamageSub,
    [DamageMult.id]: DamageMult,
    [Initiative.id]: Initiative,
    [Breakage.id]: Breakage,
    [Fortitude.id]: Fortitude,
    [Movement.id]: Movement,
    [ElementalAttack.id]: ElementalAttack,
    [SupernaturalAttack.id]:SupernaturalAttack,
    [CriticalFull.id]: CriticalFull
}
const EmptyTechnique ={
    id:"none",
    name: "",
    tiers:[
        {value:"",first:"-",second:"-",mk:"-",mant:"-",SM:{SMe:"-",SMa:"-"},level:"-"},
    ],
    override:true
}

export {ALL_TECHNIQUE_EFFECTS,EmptyTechnique}