import { NoConnectionModalComponent } from './../components/no-connection-modal/no-connection-modal';
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

  secToRepeat = 5;

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
          let modal = this.modalctl.create(NoConnectionModalComponent, {
            countdown:this.secToRepeat
          }, {enableBackdropDismiss: false})
          modal.present();
          console.log("hey");
          /*this.events.publish(
            Config.EventSend.SEND_BOT_MESSAGE,
            "NO connection"
          );*/
        }
      ).retryWhen(error =>{
        return error.delay(this.secToRepeat*1000+15);
      } );

      return request;
  }
}
