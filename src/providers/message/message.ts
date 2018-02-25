import { ActionResponse } from './../../model/actionResponse';
import { EndpointsProvider } from './../endpoints/endpoints';
import { Endpoints } from './../../constants/endpoints';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../../model/message';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  constructor(private http: HttpClient,
              private endpointsProvider:EndpointsProvider) {
  }

  send(message: Message): Observable<ActionResponse>{

    return this.http.post<ActionResponse>(this.endpointsProvider.getSendMessageEndpoint(1),{
      query: message.content
    },{
      headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    });
  }

}
