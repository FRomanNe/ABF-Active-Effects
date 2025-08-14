import {ActiveABFActor} from "./scripts/actors/activeABFActor.js";
import ABFActiveItem from "./scripts/items/ABFItem.js";
import ABFActiveItemSheet from "./scripts/items/ABFItemSheet.js";
import ABFActiveActorSheet from "./scripts/actors/ABFActiveActorSheet.js"
import {ABFActorSheet} from "./scripts/animabfConnector.js";
import {ALL_TEMPLATES} from "./templates/templates.js";
import {registerCombatWebsocketRoutes} from "./scripts/combat/websocket/registerCombatWebsocketRoutes.js";
import {replaceMacroBar} from "./scripts/utils/replaceMacroBar.js";

Hooks.once('init', async () => {


    CONFIG.Actor.documentClass = ActiveABFActor;
    CONFIG.ActiveEffect.legacyTransferral = false;
    Items.registerSheet("abf", ABFActiveItemSheet, {makeDefault: true});
    Actors.registerSheet("abf", ABFActiveActorSheet, {makeDefault: true});
    await loadTemplates(ALL_TEMPLATES);
});

Hooks.once("ready", () => {
  registerCombatWebsocketRoutes();
  replaceMacroBar();
});