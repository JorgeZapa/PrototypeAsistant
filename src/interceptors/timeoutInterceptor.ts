import { NoConnectionModalComponent } from './../components/no-connection-modal/no-connection-modal';
import { Events } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/do";
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/expand';

import { ModalController, AlertController } from "ionic-angular";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  constructor(
    public events: Events,
    public modalctl: ModalController,
    public alertController: AlertController
  ) {}

  private readonly secToRepeat = 5;
  
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
        }
      ).retryWhen(error =>{
        return error.delay(this.secToRepeat*1000+15);
      } );

      return request;
  }
}
