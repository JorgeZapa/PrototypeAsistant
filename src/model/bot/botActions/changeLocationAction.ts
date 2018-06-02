import { RasaEvent } from './../../rasaPetition/Events/rasaEvent';
import { BaseBotAction } from "./baseBotAction";
import { Config } from "../../../constants/config";

export class ChangeLocationAction extends BaseBotAction {
    execute(): RasaEvent {
        super.sendTextBotMessage("Trying to change home location...");
        let confirmAlert = super.createConfirmAlert("Save new Home Location",
        "I am about to save a new home location to have as reference for other actions are you sure you want to change it?",
        ()=>this.changeHomeLocation(), ()=> this.sendTextBotMessage("Okay i won't change it"));
        confirmAlert.present();
        
        return null;
    }

    changeHomeLocation(){
        this.botResources.getLocationProvider().saveHomeLocation().finally(()=> super.notifyFinished()).subscribe(res=>{
            this.sendTextBotMessage("New home location saved!");
        }, error=>{
            console.log(error);
            super.sendTextBotMessage("I couldn't get your new position");
        } )
    }

    getRasaEncodingName(): string {
       return Config.rasaSupportedActions.change_location;
    }
}