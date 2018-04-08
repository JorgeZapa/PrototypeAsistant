import { Config } from "./../../constants/config";
import { Platform, Events } from "ionic-angular";
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
  private hearing = false;

  @Output() textOutputEvent = new EventEmitter<string>();

  private options: SpeechRecognitionListeningOptions = {
  };

  constructor(
    private speechRecognition: SpeechRecognition,
    private platform: Platform,
    private events: Events
  ) {}

  checkPermission() {
    this.speechRecognition
      .requestPermission()
      .then(res => this.processSpeech());
  }

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
        this.hearing=true;
        this.speechRecognition.startListening(this.options).finally(()=> this.hearing=false).subscribe(
          interpretedText => {
            console.log(interpretedText.join(" "));
            this.textOutputEvent.emit(interpretedText[0]);
          },
          error => {
            console.log("could not retireve text form speech");
            console.log(error);
            this.events.publish(
              Config.EventSend.SEND_BOT_MESSAGE,
              "I can't hear you, you may need to accept the permissions!"
            );
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
