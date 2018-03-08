import { Platform } from "ionic-angular";
import {
  SpeechRecognition,
  SpeechRecognitionListeningOptions
} from "@ionic-native/speech-recognition";
import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "speech-button",
  templateUrl: "speech-button.html"
})
export class SpeechButtonComponent {
  private havePermision: boolean;

  @Output() getTextDestination = new EventEmitter<string>();

  private options: SpeechRecognitionListeningOptions = {
    showPopup: false

  };

  constructor(
    private speechRecognition: SpeechRecognition,
    private platform: Platform
  ) {}

  start() {
    /*if(!this.isDevice()){
      console.log("Can not execute speech recognition plugin as you are not in cordova device");
      return;
    }*/
    if (!this.havePermision) {
      this.speechRecognition
        .requestPermission()
        .then(res => this.processSpeech());
    } else {
      this.processSpeech();
    }
  }

  private processSpeech() {
    this.speechRecognition.isRecognitionAvailable().then(available => {
      if (!available) {
        //alert aqui
        console.log("speechRecognition not available in this device");
      } else {
        this.speechRecognition.startListening(this.options).subscribe(
          interpretedText => {
            console.log(interpretedText.join(" "));
            let textDestination = interpretedText[0];
            this.getTextDestination.emit(textDestination);
          },
          error => {
            console.log("could not retireve text form speech");
            console.log(error);
          }
        );
      }
    });
  }

  stop() {
    /*if(!this.isDevice()){
      console.log("Can not execute speech recognition plugin as you are not in cordova device");
      return;
    }*/
    this.speechRecognition.stopListening().then();
  }

  private isDevice() {
    this.platform.is("cordova");
  }
}
