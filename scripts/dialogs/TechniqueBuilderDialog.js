import {ALL_TECHNIQUE_EFFECTS,EmptyTechnique } from "../items/utils/TechniquesData/TechniqueEffectData.js";
import { MAINTENANCE} from "../items/utils/TechniquesData/constants.js";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

class TechniqueBuilder extends HandlebarsApplicationMixin(ApplicationV2){
    constructor(options){
        super(options)
        this.name = game.i18n.format("DOCUMENT.New", {type: game.i18n.localize("anima.ui.domine.techniques.technique.header.name.title")});
        this.primary = {effect:"none",tier:0, maint:MAINTENANCE.NO};
        this.secondaries =[];
    }
    static DEFAULT_OPTIONS = {
        tag: "form",
        position:{
            width:700
        },
        actions: {
            maint: TechniqueBuilder.Click,
            add: TechniqueBuilder.Add
        },
        form: {
            handler: TechniqueBuilder.myFormHandler,
            submitOnChange: false,
            closeOnSubmit: true
        }
    }
    static PARTS = {
        form: {template: "modules/anima-active-effects/templates/items/technique/builder/builder.hbs"},
        footer: {template: "templates/generic/form-footer.hbs"}
    }

    static Click(event,target){
        let clickable = this.element.querySelectorAll(".clickable");
        let id = target.dataset.itemId;

        clickable = Array.from(clickable).filter(i=>i.dataset.itemId==id);
        let dblClick = false;
        if(target.classList.contains("active")) dblClick = true;

        for(const element of clickable){
            element.classList.remove("active");
            if(!element.classList.contains("not-active"))
                element.classList.add("not-active");
        }
        if(!dblClick){
            target.classList.add("active");
            target.classList.remove("not-active");
            
            
            if(id == 0){
                if(target.classList.contains("maint"))
                    this.primary.maint = MAINTENANCE.MAINT;
                else if(target.classList.contains("Sme"))
                    this.primary.maint = MAINTENANCE.SMe;
                else if(target.classList.contains("Sme"))
                    this.primary.maint = MAINTENANCE.SMa;
            }else{
                id= id.replace("second_","");
                if(target.classList.contains("maint"))
                    this.secondaries[id].maint = MAINTENANCE.MAINT;
                else if(target.classList.contains("Sme"))
                    this.secondaries[id].maint = MAINTENANCE.SMe;
                else if(target.classList.contains("Sme"))
                    this.secondaries[id].maint = MAINTENANCE.SMa;
            }
        }else this.target.maint = MAINTENANCE.NO;
    }
    static Add(event,target){
        this.secondaries.push({effect:"none",tier:0, maint:MAINTENANCE.NO});
        this.render();
    }

    _prepareContext(options){
        let buttons = {buttons: [{ type: "submit", icon: "fa-solid fa-save", label: "SETTINGS.Save" }]};
        let data ={name:this.name, primary:this.primary,data:this.secondaries, effects: {"none":EmptyTechnique, ...ALL_TECHNIQUE_EFFECTS}};
        return {...buttons,...data};
    }
    _onRender(context, options){
        let a = ALL_TECHNIQUE_EFFECTS[this.primary.effect];
        let effects = this.element.querySelectorAll(".effects")
        for (const effect of effects){
            effect.addEventListener("change",(e)=> {
                if(e.currentTarget.dataset.itemId== 0)
                    this.primary.effect = e.currentTarget.value;
                else
                    this.secondaries[e.currentTarget.dataset.itemId.replace("second_","")].effect = e.currentTarget.value;
                this.render();
            });
        }
        let tiers = this.element.querySelectorAll(".tiers")
        for (const tier of tiers){
            tier.addEventListener("change",(e)=> {
                if(e.currentTarget.dataset.itemId== 0)
                    this.primary.tier = e.currentTarget.value;
                else
                    this.secondaries[e.currentTarget.dataset.itemId.replace("second_","")].tier = e.currentTarget.value;
                this.render();
            });
        }
        let nameInput = this.element.querySelectorAll(".input-name");
        nameInput[0].addEventListener("change",(e)=>{
            this.name = e.currentTarget.value;
        });
    }

    static async myFormHandler(event, form, formData) {
        const name = formData.object.name;
        const result = {name:name, effects:[this.primary,...this.secondaries]};
        await this.options.submit?.(result);
    }
}


async function TechniqueBuilderDialog(actor,technique)
{


    const result = await new Promise((resolve)=>{
        let dialog = new TechniqueBuilder({
            title: game.i18n.localize("ABFae.UI.Titles.TechniqueBuilder"),
            submit: resolve
            }
        ,{width: 700});
        dialog.render(true);
    })
    return result;
}

export {TechniqueBuilderDialog}