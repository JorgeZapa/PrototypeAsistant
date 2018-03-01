import { BotResources } from './botResources';
import { GreetAction } from './botActions/greetAction';
import { RasaProvider } from './../../providers/rasa/rasa';
import { DefaultBotState } from './botStates/defaultBotState';
import { BotState } from './botStates/botState';
import { ActionFactory } from './actionFactory';
import { ActionResponse } from './../actionResponse';
import { Message } from './../message';
import { Config } from './../../constants/config';
export class Bot{

    name = Config.botName;
    state :BotState;

    constructor(messageList: Array<Message>, rasaProvider:RasaProvider){
        this.state = new DefaultBotState(new BotResources(messageList, rasaProvider));
    }

    readUserMessage(userMessage : Message){
        this.state.processUserMessage(userMessage.content);
    }

}