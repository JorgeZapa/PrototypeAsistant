import { Config } from "./../../constants/config";
import { Platform, Events, ModalController, Modal } from "ionic-angular";
import {
  SpeechRecognition,
  SpeechRecognitionListeningOptions
} from "@ionic-native/speech-recognition";
import { Component, EventEmitter, Output } from "@angular/core";
import { SpeechModalComponent } from "../speech-modal/speech-modal";

@Component({
  selector: "speech-button",
  templateUrl: "speech-button.html"
})
export class SpeechButtonComponent {
  private havePermission: boolean;
  private hearing = false;

  private speechModal : Modal;

  @Output() textOutputEvent = new EventEmitter<string>();

  private speechOptions: SpeechRecognitionListeningOptions = {
    showPopup: false,
    language: "en"
  };

  constructor(
    private speechRecognition: SpeechRecognition,
    private platform: Platform,
    private events: Events,
    private modalctl: ModalController
  ) {}

  checkPermission() {
    this.speechRecognition
      .requestPermission()
      .then(res => this.processSpeech());
  }

  start() {
    if (!this.havePermission) {
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
        console.log("speechRecognition not available in this device");
      } else {
        this.hearing=true;
        
        this.speechModal = this.modalctl.create(SpeechModalComponent,{}, {
          enableBackdropDismiss: false
        })
        this.speechModal.present();

        this.speechRecognition.startListening(this.speechOptions).finally(()=>{
          this.hearing=false;
          this.speechModal.dismiss();
        } ).subscribe(
          interpretedText => {
            this.textOutputEvent.emit(interpretedText[0]);
            this.speechModal.dismiss();
          },
          error => {
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
    this.speechRecognition.stopListening().then();
  }
}
