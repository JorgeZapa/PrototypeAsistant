import { DistanceAction } from './botActions/distanceAction';
import { LostAction } from './botActions/lostAction';
import { GiveLocationAction } from './botActions/giveLocationAction';
import { BotAction } from './botActions/botAction';
import { ListenAction } from './botActions/listenAction';
import { GiveNumberAction } from './botActions/giveNumberAction';
import { BotResources } from './botResources';
import { GreetAction } from './botActions/greetAction';
import { Config } from './../../constants/config';
import { ActionResponse } from './../rasaResponse/actionResponse';
import { GoodbyeAction } from './botActions/goodbyeAction';
import { GiveNameAction } from './botActions/giveNameAction';
//import * as Actions from './actions/actions';
export class ActionFactory{


    static createActionFromResponse(actionResponse: ActionResponse, botResources: BotResources){
        console.log(actionResponse);
        switch(actionResponse.next_action){
            case "utter_greet":
                return new GreetAction(botResources);
            case "utter_goodbye":
                return new GoodbyeAction(botResources);
            case "utter_give_name":
                return new GiveNameAction(botResources, actionResponse.tracker.slots.name);
            case "utter_give_number":
                return new GiveNumberAction(botResources, actionResponse.tracker.slots.number);
            case "utter_give_location":
                return new GiveLocationAction(botResources);
            case "utter_lost":
                return new LostAction(botResources);
            case "utter_distance":
                return new DistanceAction(botResources);
            case "action_listen":
                return new ListenAction(botResources);
        }
    }

    /*static createActionFromResponse(actionResponse: ActionResponse){
        let allowedActions = Config.supportedActions;
        console.log(allowedActions);
        console.log(actionResponse);
        console.log(Actions);

        if(actionResponse.next_action in allowedActions){
            return new Actions["ActionGreet"]();    
        }
    }*/
    
}