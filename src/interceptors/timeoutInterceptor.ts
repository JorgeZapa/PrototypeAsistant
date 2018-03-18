import { ChatPage } from './../pages/chat/chat';
import { Config } from './../constants/config';
import { Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/do";

import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
  } from '@angular/common/http';
@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
    constructor(public events: Events) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).timeout(10000).do(event => {},
                 err => {
                     console.log(err);
                this.events.publish(Config.EventSend.SEND_BOT_MESSAGE,"NO connection");
            })
    }
}
        