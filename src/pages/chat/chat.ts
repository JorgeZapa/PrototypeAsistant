import { LocationProvider } from './../../providers/location/location';
import { UserProvider } from './../../providers/user/user';
import { Bot } from './../../model/bot/bot';
import { RasaProvider } from './../../providers/rasa/rasa';
import { Message } from './../../model/message';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import 'rxjs/add/operator/finally';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {


  bot:Bot;
  sentMessages: Array<Message>;
  currentMessage: string;
  isSending: boolean;

  @ViewChild(Content) content: Content


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public rasaProvider: RasaProvider,
              public userProvider: UserProvider,
              public locationProvider: LocationProvider) {
  }

  ionViewDidLoad() {
    this.userProvider.logUserIn().subscribe(res=>{
      this.sentMessages= new Array<Message>();
      this.bot = new Bot(this.sentMessages, this.rasaProvider, this.content, this.userProvider, this.locationProvider);
      this.bot.welcomeUser();
      this.currentMessage="";
    });
  }


  sendMessage(){
    let message = new Message(this.currentMessage, false);
    this.showAndClearMessage(message);
    this.bot.readUserMessage(message);
  }

  private showAndClearMessage(message: Message){
    this.sentMessages.push(message);
    this.currentMessage="";
    this.content.scrollToBottom(300);
  }

  textAreaHasText(){
    return this.currentMessage==undefined ||this.currentMessage.length!=0;
  }

}
