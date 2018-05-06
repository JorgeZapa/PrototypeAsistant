import { Component, Input } from '@angular/core';
import { Message } from '../../model/message';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'message-wrapper',
  templateUrl: 'message-wrapper.html'
})
export class MessageWrapperComponent {

  @Input()
  message: Message;

  private profileBotPicture = "./assets/imgs/dedisco.png"; 

  constructor(private textToSpeech: TextToSpeech) {
  }

  readSpeech(){
    this.textToSpeech.speak(this.message.content)
  }
  
}
