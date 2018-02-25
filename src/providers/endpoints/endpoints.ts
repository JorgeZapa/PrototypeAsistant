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

  getSendMessageEndpoint(userId: number){
    return Endpoints.SEND_MESSAGE.replace(/{.*}/g,String(userId))
  }

}
