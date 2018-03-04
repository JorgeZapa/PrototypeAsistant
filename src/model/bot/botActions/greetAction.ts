import { RasaEvents } from './../../rasaPetition/rasaEvents';
import { RasaEvent } from './../../rasaPetition/rasaEvent';
import { BotResources } from './../botResources';
import { Config } from './../../../constants/config';
import { BotAction } from "./botAction";
import { Message } from '../../message';
import { BaseBotAction } from './baseBotAction';
import { User } from '../../User/User';

export class GreetAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.greet;
    }
    execute() {
        let loggedUser = this.botResources.getUserProvider().getLoggedUser();
        console.log(loggedUser);
        let resultingEvent = null;
        if(loggedUser.name == null){
            this.welcome();
        }
        else{
            this.usualGreetings(loggedUser);
            resultingEvent = new RasaEvent(RasaEvents.restart);
        }
        return resultingEvent;
    }

    welcome(){
        super.sendBotMessage("Welcome!");
        super.sendBotMessage("I am " + Config.botName + "!");
        super.sendBotMessage("I know how hard is to remember things when you are a little bit clueless");
        super.sendBotMessage("What is your name?");
    }

    usualGreetings(user: User){
        super.sendBotMessage("Hey " + user.name + "!");
        super.sendBotMessage("Did you know that 11% of people are left handed");
        super.sendBotMessage("Amazing, right?");
        super.sendBotMessage("How can i help you today?");
    }
}