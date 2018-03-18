import { Events } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { SmsProvider } from './../../providers/sms/sms';
import { LocationProvider } from './../../providers/location/location';
import { UserProvider } from './../../providers/user/user';
import { RasaProvider } from './../../providers/rasa/rasa';
import { Message } from './../message';
import { Content } from 'ionic-angular';
export class BotResources{

    private messageList: Array<Message>;
    private rasaProvider: RasaProvider;
    private content: Content;
    private storage: Storage;
    private userProvider: UserProvider;
    private locationProvider: LocationProvider;
    private smsProvider: SmsProvider;
    private launchNavigator: LaunchNavigator;
    private events : Events;

    constructor(messageList: Array<Message>,
                rasaProvider: RasaProvider,
                content: Content,
                userProvider: UserProvider,
                locationProvider: LocationProvider,
                smsProvider: SmsProvider,
                launchNavigator: LaunchNavigator,
                events: Events){
        this.messageList = messageList;
        this.rasaProvider = rasaProvider;
        this.content = content;
        this.userProvider = userProvider;
        this.locationProvider = locationProvider;
        this.smsProvider = smsProvider;
        this.launchNavigator = launchNavigator;
        this.events=events;
    }

    getMessageList() :Array<Message>{
        return this.messageList;
    }

    getRasaProvider(){
        return this.rasaProvider;
    }

    getContent(){
        return this.content;
    }

    getUserProvider(){
        return this.userProvider;
    }

    getLocationProvider(){
        return this.locationProvider;
    }

    getSmsProvider(){
        return this.smsProvider;
    }

    getLaunchNavigator(){
        return this.launchNavigator;
    }

    getEvents(){
        return this.events;
    }


}