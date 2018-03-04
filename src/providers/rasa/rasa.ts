import { RasaEvent } from './../../model/rasaPetition/rasaEvent';
import { ActionResponse } from './../../model/rasaResponse/actionResponse';
import { EndpointsProvider } from './../endpoints/endpoints';
import { Endpoints } from './../../constants/endpoints';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../../model/message';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RasaProvider {

  constructor(private http: HttpClient,
              private endpointsProvider:EndpointsProvider) {
  }

  parse(text: string): Observable<ActionResponse>{
    return this.http.post<ActionResponse>(this.endpointsProvider.getParseTextEndpoint(1),{
      query: text
    },{
      headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    });
  }

  continue(lastExecutedAction: string, rasaEvent: RasaEvent): Observable<ActionResponse>{
    return this.http.post<ActionResponse>(this.endpointsProvider.getContinueEndpoint(1),{
      executed_action: lastExecutedAction,
      events:rasaEvent==null?[]:[rasaEvent]
    },{
      headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    })
  }


}
