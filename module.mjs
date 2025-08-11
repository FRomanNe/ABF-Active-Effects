import {ActiveABFActor} from "./scripts/actors/activeABFActor.js";
import ABFActiveItem from "./scripts/items/ABFItem.js";
import ABFActiveItemSheet from "./scripts/items/ABFItemSheet.js";
import ABFActiveActorSheet from "./scripts/actors/ABFActiveActorSheet.js"
import {ABFActorSheet} from "./scripts/animabfConnector.js";
import {TEMPLATES} from "./templates/templates.js";

Hooks.once('init', async () => {


    CONFIG.Actor.documentClass = ActiveABFActor;
    CONFIG.ActiveEffect.legacyTransferral = false;
    Items.registerSheet("abf", ABFActiveItemSheet, {makeDefault: true});
    Actors.registerSheet("abf", ABFActiveActorSheet, {makeDefault: true});
    await loadTemplates(TEMPLATES);
});