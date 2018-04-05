import { ChatPage } from "./../pages/chat/chat";
import { Config } from "./../constants/config";
import { Events } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/do";
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/expand';

import { ModalController, NavParams, AlertController } from "ionic-angular";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from "@angular/common/http";
@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  constructor(
    public events: Events,
    public modalctl: ModalController,
    public alertController: AlertController
  ) {}

  repeateRequest: boolean;
   intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = next
      .handle(req)
      .timeout(10000)
      .do(
        event => {},
        err => {
          console.log(err);
          this.errorConfirmation(5000).then();
          console.log("hey");
          /*this.events.publish(
            Config.EventSend.SEND_BOT_MESSAGE,
            "NO connection"
          );*/
        }
      ).retryWhen(error =>{
        return error.delay(5100);
      } );

      return request;
  }

   async errorConfirmation(delayTime: number): Promise<any> {
    return new Promise(async (resolve, reject) => {

        let alert = this.alertController.create({
            title: "An error has ocurred",
            message:
              "I can't access my brain at all! you lack internet connection!\n"
               + "I am going to try again in " + delayTime/1000 +" seconds!"
          });

          alert.present();

          await this.delay(delayTime);

          alert.dismiss();

          resolve();

    });
    
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
}
