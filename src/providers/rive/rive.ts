import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

/*
  Generated class for the RiveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const RiveScript = require('rivescript');
const riveBot = new RiveScript();
@Injectable()
export class RiveProvider{

  private riveBot
  constructor(private http: HttpClient) {
    riveBot.loadFile("assets/general_data.rive", ()=>{
      console.log("training data read")
    });
  }

  reply(sendedMessage: string): string{ 
    riveBot.sortReplies();
    return riveBot.reply('local-user', sendedMessage);
  }



}
