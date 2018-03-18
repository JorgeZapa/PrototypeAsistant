import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from '../../message';
import { User } from '../../User/User';

export class GiveLocationAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }

    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.location;
    }

    execute() {
       super.sendBotMessage("Now i'll use my magic powers to get your location to help you get back when you get lost!");
       super.sendBotMessage("If you allow me, of course");
       this.botResources.getLocationProvider().saveHomeLocation().subscribe(ok=>{}, error=>{
           console.log(error);
           super.sendBotMessage("I couldn't use my magic at all. Something went wrong getting your location.");
       });
       return null;
    }
    
    
}