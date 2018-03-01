import { GreetAction } from './../botActions/greetAction';
import { BotResources } from './../botResources';
import { WrongAction } from './../botActions/wrongAction';
import { ListenAction } from './../botActions/listenAction';
import { ActionResponse } from './../../actionResponse';
import { ActionFactory } from './../actionFactory';
import { RasaProvider } from './../../../providers/rasa/rasa';
import { BotAction } from './../botActions/botAction';
import { BotState } from './botState';
export class DefaultBotState implements BotState {

    action: BotAction;
    initialAction: BotAction;
    botResources:BotResources;

    constructor(botResources: BotResources){
        this.botResources = botResources;
        this.welcome();
    }

    welcome(){
        this.action = new GreetAction(this.botResources);
        this.takeNextAction(this.action);
    }

    processUserMessage(message: string) {
        
        this.botResources.getRasaProvider().parse(message).subscribe(res=>{
            this.action = ActionFactory.createActionFromResponse(res,this.botResources);

            if(this.action instanceof ListenAction){
                //If twice ListenAction -> we didn't understand
                new WrongAction(this.botResources).execute();
                return;
            }
            this.action.execute();
            
           this.takeNextAction(this.action);

        });
    }

    takeNextAction(lastExecutedAction: BotAction){
        this.botResources.getRasaProvider().continue(lastExecutedAction.getRasaEncodingName()).subscribe(res=>{
            this.recursiveProcessAction(res);
        })
    }

    recursiveProcessAction(actResponse: ActionResponse){
        this.action = ActionFactory.createActionFromResponse(actResponse, this.botResources);
        if(this.action instanceof ListenAction){
            return;
        }
        this.action.execute();
        this.botResources.getRasaProvider().continue(this.action.getRasaEncodingName()).subscribe(res=>{
            this.recursiveProcessAction(res);
        }
        )
    }
}