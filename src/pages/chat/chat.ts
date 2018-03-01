import { Bot } from './../../model/bot/bot';
import { RasaProvider } from './../../providers/rasa/rasa';
import { Message } from './../../model/message';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public rasaProvider: RasaProvider) {
  }

  ionViewDidLoad() {
    this.sentMessages= new Array<Message>();
    this.bot = new Bot(this.sentMessages, this.rasaProvider);
  }

  sendMessage(){
    let message = new Message(this.currentMessage, false);
    this.showAndClearMessage(message);
    this.bot.readUserMessage(message);
  }

  private showAndClearMessage(message: Message){
    this.sentMessages.push(message);
    this.currentMessage="";
  }

}
