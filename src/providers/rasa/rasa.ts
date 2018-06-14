import { UserProvider } from "./../user/user";
import { RasaEvent } from "./../../controller/rasaPetition/Events/rasaEvent";
import { ActionResponse } from "./../../controller/rasaResponse/actionResponse";
import { EndpointsProvider } from "./../endpoints/endpoints";
import { Endpoints } from "./../../constants/endpoints";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Message } from "../../model/messages/message";
import { Observable } from "rxjs/Observable";
import { RasaSetSlotEvent } from "../../controller/rasaPetition/Events/rasaSetSlotEvent";

@Injectable()
export class RasaProvider {
  constructor(
    private http: HttpClient,
    private endpointsProvider: EndpointsProvider,
    private userProvider: UserProvider
  ) {}

  parse(text: string): Observable<ActionResponse> {
    return this.http.post<ActionResponse>(
      this.endpointsProvider.getParseTextEndpoint(
        this.userProvider.getLoggedUser().deviceId
      ),
      {
        query: text
      },
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    );
  }

  continue(
    lastExecutedAction: string,
    rasaEvent: RasaEvent
  ): Observable<ActionResponse> {
    return this.http.post<ActionResponse>(
      this.endpointsProvider.getContinueEndpoint(
        this.userProvider.getLoggedUser().deviceId
      ),
      {
        executed_action: lastExecutedAction,
        events: rasaEvent == null ? [] : [rasaEvent.getPayload()]
      },
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    );
  }

  sendSetSlotsEvent(rasaEvent: RasaSetSlotEvent): Observable<ActionResponse> {
    return this.http.post<ActionResponse>(
      this.endpointsProvider.getSendEventEndpoint(
        this.userProvider.getLoggedUser().deviceId
      ),
      [rasaEvent.getPayload()],
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    );
  }
}
