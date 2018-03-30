import { Endpoints } from './../../constants/endpoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EndpointsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EndpointsProvider {

  constructor() {
  }

  getParseTextEndpoint(deviceId: string){
    return Endpoints.PARSE_TEXT.replace(/{.*}/g, deviceId);
  }

  getContinueEndpoint(deviceId: string){
    return Endpoints.CONTINUE.replace(/{.*}/g, deviceId);
  }

  getSendEventEndpoint(deviceId: string){
    return Endpoints.SEND_EVENT.replace(/{.*}/g, deviceId);
  }

}
