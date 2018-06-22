import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the NoConnectionModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'no-connection-modal',
  templateUrl: 'no-connection-modal.html'
})
export class NoConnectionModalComponent {

  private countdown: number;
  private title: string;
  private message: string;

  constructor(navParams: NavParams, public viewController: ViewController) {
    this.countdown = navParams.get("countdown");
    this.title = "oh oh..."
    this.message = "It seems like an connection error ocurred. I will retry in..."
   setInterval(()=> this.countdown = this.countdown -1, 1000);
   setTimeout(()=>this.viewController.dismiss(), (this.countdown)*1000);
  
  }



}
