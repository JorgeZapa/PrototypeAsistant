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

  getParseTextEndpoint(userId: number){
    return Endpoints.PARSE_TEXT.replace(/{.*}/g,String(userId));
  }

  getContinueEndpoint(userId: number){
    return Endpoints.CONTINUE.replace(/{.*}/g,String(userId));
  }

}
