import { Injectable } from '@angular/core';

/*
  Generated class for the RiveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const RiveScript = require('rivescript');
const riveBot = new RiveScript();
@Injectable()
export class RiveProvider{
  constructor() {
    riveBot.loadFile("assets/general_data.rive", ()=>{
      console.log("training data read")
    });
  }

  reply(sendedUtterance: string): string{ 
    riveBot.sortReplies();
    return riveBot.reply('local-user', sendedUtterance);
  }



}
