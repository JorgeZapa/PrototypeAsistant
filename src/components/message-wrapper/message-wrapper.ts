import { Component, Input } from '@angular/core';
import { Message } from '../../model/message';

@Component({
  selector: 'message-wrapper',
  templateUrl: 'message-wrapper.html'
})
export class MessageWrapperComponent {

  @Input()
  message: Message;

  private profileBotPicture = "./assets/imgs/wallie.jpg" 

  constructor() {
  }

}
