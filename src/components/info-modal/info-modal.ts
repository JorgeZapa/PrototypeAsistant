import { Config } from './../../constants/config';
import { Component } from '@angular/core';

@Component({
  selector: 'info-modal',
  templateUrl: 'info-modal.html'
})
export class InfoModalComponent {

  private functionalityInfos = new Array<FunctionalityInfo>();
  private version = Config.version;
  constructor() {
    this.functionalityInfos.push(new FunctionalityInfo("I will change your home location to your current location",
                                  "I want to change my home location"));
    this.functionalityInfos.push(new FunctionalityInfo("I will show you the distance from your home location to where you are",
                                  "How far am i from home"));
    this.functionalityInfos.push(new FunctionalityInfo("I will use another app to show you the route to get home",
                                 "I want to go home"));
    this.functionalityInfos.push(new FunctionalityInfo("I will send an SOS message to the SOS number you gave me", "I am lost"));
  }
}

class FunctionalityInfo{

  _description: string;
  _example: string;

  constructor(description: string, example: string){
    this._description = description;
    this._example = example;
  }

  get description(){
    return this._description;
  }

  get example(){
    return this._example;
  }


}
