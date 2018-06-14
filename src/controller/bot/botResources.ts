import { RiveProvider } from './../../providers/rive/rive';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { SmsProvider } from './../../providers/sms/sms';
import { LocationProvider } from './../../providers/location/location';
import { UserProvider } from './../../providers/user/user';
import { RasaProvider } from './../../providers/rasa/rasa';
import { Message } from './../../model/messages/message';
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
    private alertController: AlertController;
    private riveProvider: RiveProvider;

    constructor(messageList: Array<Message>,
                rasaProvider: RasaProvider,
                content: Content,
                userProvider: UserProvider,
                locationProvider: LocationProvider,
                smsProvider: SmsProvider,
                launchNavigator: LaunchNavigator,
                events: Events,
                alertController: AlertController,
                riveProvider: RiveProvider){

        this.messageList = messageList;
        this.rasaProvider = rasaProvider;
        this.content = content;
        this.userProvider = userProvider;
        this.locationProvider = locationProvider;
        this.smsProvider = smsProvider;
        this.launchNavigator = launchNavigator;
        this.events=events;
        this.alertController=alertController;
        this.riveProvider = riveProvider
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

    getAlertController(){
        return this.alertController;
    }

    getRiveProvider(){
        return this.riveProvider;
    }



}