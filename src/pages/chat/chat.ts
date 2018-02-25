import { Bot } from './../../model/bot/bot';
import { MessageProvider } from './../../providers/message/message';
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
              public messageProvider: MessageProvider) {
  }

  ionViewDidLoad() {
    this.bot= new Bot();
    this.sentMessages= new Array<Message>();
  }

  sendMessage(){
    let message = new Message(this.currentMessage, false);
    this.showAndClearMessage(message);
    this.messageProvider.send(message)
                .subscribe( res =>{
                            console.log(res);
                            this.bot.setAction(res);
                            this.sentMessages.push(this.bot.answer());
                      })
  }

  private showAndClearMessage(message: Message){
    this.sentMessages.push(message);
    this.currentMessage="";
  }

}
