import { ImageMessage } from './../../model/messages/imageMessage';
import { Component, Input } from '@angular/core';
import { Message } from '../../model/messages/message';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'message-wrapper',
  templateUrl: 'message-wrapper.html'
})
export class MessageWrapperComponent {

  @Input()
  message: Message;
 

  constructor(private textToSpeech: TextToSpeech) {
  }

  readSpeech(){
    this.textToSpeech.speak(this.message.getContent());
  }

  isImage(): boolean{
    return this.message instanceof ImageMessage;
  }
  
}
