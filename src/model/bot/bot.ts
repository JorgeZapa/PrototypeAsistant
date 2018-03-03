import { BotResources } from './botResources';
import { GreetAction } from './botActions/greetAction';
import { RasaProvider } from './../../providers/rasa/rasa';
import { DefaultBotState } from './botStates/defaultBotState';
import { BotState } from './botStates/botState';
import { ActionFactory } from './actionFactory';
import { ActionResponse } from './../../model/rasaResponse/actionResponse';
import { Message } from './../message';
import { Config } from './../../constants/config';
import { Content } from 'ionic-angular';
export class Bot{

    name = Config.botName;
    state :BotState;

    constructor(messageList: Array<Message>, rasaProvider:RasaProvider, content: Content){
        this.state = new DefaultBotState(new BotResources(messageList, rasaProvider, content));
    }

    readUserMessage(userMessage : Message){
        this.state.processUserMessage(userMessage.content);
    }

    welcomeUser(){
        this.state.welcome();
    }

}