import {ActiveABFActor} from "./scripts/actors/activeABFActor.js";

Hooks.once('init', function () {

    CONFIG.Actor.documentClass = ActiveABFActor;
});