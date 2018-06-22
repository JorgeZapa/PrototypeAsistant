import { UserProvider } from "./../user/user";
import { RasaEvent } from "./../../controller/rasaPetition/Events/rasaEvent";
import { ActionResponse } from "./../../controller/rasaResponse/actionResponse";
import { EndpointsProvider } from "./../endpoints/endpoints";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
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
        this.userProvider.getCurrentUser().deviceId
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
        this.userProvider.getCurrentUser().deviceId
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
        this.userProvider.getCurrentUser().deviceId
      ),
      [rasaEvent.getPayload()],
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    );
  }
}
