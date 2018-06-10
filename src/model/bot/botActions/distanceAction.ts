import { BotFlowController } from './../botFlow/botFlowController';
import { Observable } from 'rxjs/Observable';
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
    Observable.forkJoin(this.botResources.getLocationProvider().getCurrentLocation(),
                        this.botResources.getLocationProvider().retrieveHomeLocation())
                .finally(()=> this.notifyFinished()).subscribe(results=>{
                    console.log(results[0]);
                    console.log(results[1]);
                    let distance = this.botResources.getLocationProvider().distanceBetweenPositions(results[1],results[0]);
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
                    super.sendTextBotMessage("I wasn't able to calcualte the distance");
                })
       
        //do something or other depending on distance
        return null;
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.distance;
    }
}