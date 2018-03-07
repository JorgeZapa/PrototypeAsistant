import { SmsProvider } from './../../providers/sms/sms';
import { LocationProvider } from './../../providers/location/location';
import { UserProvider } from './../../providers/user/user';
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

    constructor(messageList: Array<Message>,
                rasaProvider:RasaProvider,
                content: Content,
                userProvider: UserProvider,
                locationProvider: LocationProvider,
                smsProvider: SmsProvider){
        this.state = new DefaultBotState(new BotResources(messageList, rasaProvider, content,
                                                         userProvider, locationProvider, smsProvider));
    }

    readUserMessage(userMessage : Message){
        this.state.processUserMessage(userMessage.content);
    }

    welcomeUser(){
        this.state.welcome();
    }

}