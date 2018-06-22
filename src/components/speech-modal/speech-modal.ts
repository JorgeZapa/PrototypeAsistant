import { Component } from '@angular/core';

/**
 * Generated class for the SpeechModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'speech-modal',
  templateUrl: 'speech-modal.html'
})
export class SpeechModalComponent {

  private iconName = "volume-mute";
  private iconNames = ["volume-mute", "volume-down", "volume-up"];
  private iconCounter = 0;


  constructor() {

    setInterval(()=> this.changeIcon(), 1000);

  }


  changeIcon(){
    this.iconCounter= (this.iconCounter+1)%3;
    this.iconName = this.iconNames[this.iconCounter];
  }

}
