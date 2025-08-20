
const Templates = {
    effects:{
        tab:"modules/anima-active-effects/templates/effects/effects-tab.hbs",
        base: "modules/anima-active-effects/templates/effects/base-effect-item.hbs"
    },
    combat:{
        attack:{
            main: "modules/anima-active-effects/templates/dialog/combat/combat-attack/combat-attack-dialog.hbs",
            parts: {
                combat: "modules/anima-active-effects/templates/dialog/combat/combat-attack/parts/combat.hbs"
            }
        }
    }
    
};
const ALL_TEMPLATES = [
"modules/anima-active-effects/templates/effects/effects-tab.hbs",
"modules/anima-active-effects/templates/actor/parts/domine/domine.hbs",
"modules/anima-active-effects/templates/actor/parts/domine/parts/techniques.hbs",
"modules/anima-active-effects/templates/items/technique/builder/builder.hbs",
"modules/anima-active-effects/templates/effects/base-effect-item.hbs",

"modules/anima-active-effects/templates/dialog/combat/combat-attack/combat-attack-dialog.hbs",
"modules/anima-active-effects/templates/dialog/combat/combat-attack/parts/combat.hbs"
];

export {ALL_TEMPLATES,Templates};