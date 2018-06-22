import { BotFlowController } from './../botFlow/botFlowController';
import 'rxjs/add/observable/forkJoin';
import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BaseBotAction } from "./baseBotAction";
import { RasaEvent } from '../../rasaPetition/Events/rasaEvent';

export class DistanceAction extends BaseBotAction {

    constructor(botResources: BotResources, botFlowController: BotFlowController){
        super(botResources,botFlowController);
    }

    execute(): RasaEvent {
        console.log("hi");
    this.botResources.getLocationProvider().getCurrentLocation().finally(()=> this.notifyFinished()).subscribe(currentLocation=>{
        this.botResources.getLocationProvider().getHomeLocation()
        .subscribe((homeLocation)=>{
            console.log("currentLocation",currentLocation);
            console.log("homeLocation",homeLocation);
            if(homeLocation==null){
                super.sendTextBotMessage("You need to save your home position so i can show you the distance.");
                super.sendTextBotMessage("Remember you can change your home location by asking so!");
                return;
            }
            let distance = this.botResources.getLocationProvider().distanceBetweenPositions(homeLocation,currentLocation);

            
            if(distance>2000){
                distance= distance/1000;
                super.sendTextBotMessage("You are "+ distance.toFixed(2) +" kilometers from home!");
                super.sendTextBotMessage("You seem to be really far from home!");
                super.sendTextBotMessage("Remember i can show you the route to home or send a lost SOS message!");
            }
            else{
                super.sendTextBotMessage("You are "+ distance.toFixed(2) +" meters from home!");
            }
        }, error=>{
            super.sendTextBotMessage("I wasn't able to get your home location");
            super.sendTextBotMessage("Remember you can change it by asking me to change your home location");
        })
        }
        , error=>{
            super.sendTextBotMessage("I wasn't able to get your current position.");
        })

        return null;
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.distance;
    }
}