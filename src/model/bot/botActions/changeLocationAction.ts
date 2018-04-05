import { RasaEvent } from './../../rasaPetition/Events/rasaEvent';
import { BaseBotAction } from "./baseBotAction";
import { Config } from "../../../constants/config";

export class ChangeLocationAction extends BaseBotAction {
    execute(): RasaEvent {
        super.sendBotMessage("Trying to change home location...");
        let confirmAlert = super.createConfirmAlert("Save new Home Location",
        "I am about to save a new home location to have as reference for other actions are you sure you want to change it?",
        ()=>this.changeHomeLocation(), ()=> this.sendBotMessage("Okay i won't change it"));
        confirmAlert.present();
        
        return null;
    }

    changeHomeLocation(){
        this.botResources.getLocationProvider().saveHomeLocation().subscribe(res=>{
            this.sendBotMessage("New home location saved!");
        }, error=>{
            console.log(error);
            super.sendBotMessage("I couldn't get your new position");
        } )
    }

    getRasaEncodingName(): string {
       return Config.rasaSupportedActions.change_location;
    }
}