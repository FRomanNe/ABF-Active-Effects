import { ABFItems } from "../../../animabfConnector.js";

const Frequency ={
    ACTION: "action",
    TURN: "turn",
}
const Type = {
    ATTACK: "attack",
    DEFENSE: "defense",
    COUNTER: "counterattack",
    ACTION: "action",
    START: "start",
    VARIABLE: "variable"
}
const CHAR = {
    STR:"strength",
    AGI:"agility",
    DEX:"dexterity",
    CON:"constitution",
    WIL:"willPower",
    POW:"power"
};
const Elements ={
    FIRE: "fire",
    AIR:"air",
    WATER:"water",
    EARTH:"earth",
    LIGHT:"light",
    DARK:"dark"
}
const TargetTypes={
  ACTOR: "actor",
  WEAPON: ABFItems.WEAPON
  //ARMOR: ABFItems.ARMOR
}

const MANTENANCE={
  NO: "no",
  MAINT: "manteined",
  MINOR: "susteinedMinor",
  GREATER: "susteinedGreater"
}

export {Frequency,Type,CHAR,Elements,MANTENANCE,TargetTypes}