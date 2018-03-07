import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BaseBotAction } from "./baseBotAction";
import { RasaEvent } from '../../rasaPetition/rasaEvent';
export class GoHomeAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }

    execute(): RasaEvent {
        super.sendBotMessage("This will lead you to the route to get home");
        
        this.botResources.getLocationProvider().retrieveHomeLocation()
        .subscribe(position=>{
            let coordinates = [position.coordinates.latitude, position.coordinates.longitude];
            this.botResources.getLaunchNavigator().navigate(coordinates);
        }, error=>{
            super.sendBotMessage("could not retrieve current position");
        })

        return null;
        

    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.go_home;
    }
}