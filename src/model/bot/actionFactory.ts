import { ActionGreet } from './actions/actionGreet';
import { Config } from './../../constants/config';
import { ActionResponse } from './../actionResponse';
import { ActionGoodbye } from './actions/actionGoodbye';
//import * as Actions from './actions/actions';
export class ActionFactory{


    static createActionFromResponse(actionResponse: ActionResponse){
        switch(actionResponse.next_action){
            case "utter_greet":
                return new ActionGreet();
            case "utter_goodbye":
                return new ActionGoodbye();
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