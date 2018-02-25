import { ActionFactory } from './actionFactory';
import { ActionResponse } from './../actionResponse';
import { Message } from './../message';
import { Config } from './../../constants/config';
import { Action } from './actions/action';
export class Bot{

    name = Config.botName;
    action: Action;

    setAction(actionResponse: ActionResponse){
        console.log(actionResponse);
        this.action=ActionFactory.createActionFromResponse(actionResponse);
    }

    answer(){
        return this.action.execute();
    }

}