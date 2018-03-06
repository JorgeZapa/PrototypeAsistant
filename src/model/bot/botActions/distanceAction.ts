import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { Config } from './../../../constants/config';
import { RasaEvent } from './../../rasaPetition/rasaEvent';
import { BotResources } from './../botResources';
import { BaseBotAction } from "./baseBotAction";

export class DistanceAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }

    execute(): RasaEvent {
    Observable.forkJoin(this.botResources.getLocationProvider().getCurrentLocation(),
                        this.botResources.getLocationProvider().retrieveHomeLocation())
                .subscribe(results=>{
                    console.log(results[0]);
                    console.log(results[1]);
                    let distanceMeters = this.botResources.getLocationProvider().distanceBetweenPositions(results[1],results[0]);
                    super.sendBotMessage("You are "+ distanceMeters +" meters from home!");
                }, error=>{
                    super.sendBotMessage("I wasn't able to calcualte the distance, seems like there is an error");
                })
       
        //do something or other depending on distance
        return null;
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.distance;
    }
}