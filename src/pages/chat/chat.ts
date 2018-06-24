import { InfoModalComponent } from './../../components/info-modal/info-modal';
import { BotResources } from './../../controller/bot/botResources';
import { RiveProvider } from './../../providers/rive/rive';
import { Config } from './../../constants/config';
import { LaunchNavigator } from "@ionic-native/launch-navigator";
import { SmsProvider } from "./../../providers/sms/sms";
import { LocationProvider } from "./../../providers/location/location";
import { UserProvider } from "./../../providers/user/user";
import { Bot } from "./../../controller/bot/bot";
import { RasaProvider } from "./../../providers/rasa/rasa";
import { Message } from "./../../model/messages/message";
import { Component, ViewChild, NgZone, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams, Content, Events, AlertController, IonicTapInput, ModalController } from "ionic-angular";
import "rxjs/add/operator/finally";
import { TextMessage } from '../../model/messages/textMessage';

@IonicPage()
@Component({
  selector: "page-chat",
  templateUrl: "chat.html"
})
export class ChatPage implements OnInit{
  private bot: Bot;
   sentMessages: Array<Message>;
  private currentMessage: string;
  private processing = true;

  @ViewChild(Content) content: Content;

  constructor(
    private rasaProvider: RasaProvider,
    private userProvider: UserProvider,
    private locationProvider: LocationProvider,
    private smsProvider: SmsProvider,
    private launchNavigator: LaunchNavigator,
    private events: Events,
    private ngZone: NgZone,
    private alertController: AlertController,
    private riveProvider: RiveProvider,
    private modalctl: ModalController
  ) {}

  ngOnInit(){
    this.sentMessages = new Array<Message>();
    this.bot = new Bot( new BotResources(
      this.sentMessages,
      this.rasaProvider,
      this.content,
      this.userProvider,
      this.locationProvider,
      this.smsProvider,
      this.launchNavigator,
      this.events,
      this.alertController,
      this.riveProvider
    )
    );
  }

  ionViewDidLoad() {
    this.userProvider.prepareUserDeviceId().subscribe(res => {
      this.initEvents();
      this.bot.welcomeUser();
    });
    this.currentMessage = "";

    window.addEventListener('native.keyboardshow', ()=> this.content.scrollToBottom().then());
  }

  sendMessage() {
    let message = new TextMessage(this.currentMessage, false);
    this.processing = true;
    this.addMessageAndClear(message);
    this.bot.readUserMessage(message);
  }

  private addMessageAndClear(message: Message) {
    this.sentMessages.push(message);
    this.currentMessage = "";
  }

  textAreaHasText() {
    return this.currentMessage == undefined || this.currentMessage.length != 0;
  }

  updateCurrentMessage(text: string){
    this.ngZone.run(()=>
    this.currentMessage = text
  )
    
  }

  goToBottomMessages(){

    this.content.scrollToBottom(100);

  }

  addMessageFromText(text: string){
    this.sentMessages.push(new TextMessage(text,true));
  }

  showInfo(){
    this.modalctl.create(InfoModalComponent,{}, {enableBackdropDismiss: true, showBackdrop:true}).present();    
  }

  private initEvents(){
    this.events.subscribe(Config.EventSend.SEND_BOT_MESSAGE, (text: string)=> this.addMessageFromText(text));
    this.events.subscribe(Config.EventFinishProcessing.FINISH_PROCESSING, ()=> this.processing=false);
  }

  
}
