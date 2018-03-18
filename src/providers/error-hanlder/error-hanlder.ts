import { HttpStatus } from "./../../constants/constants";
import { Config } from "./../../constants/config";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Events } from "ionic-angular";

@Injectable()
export class ErrorHanlderProvider {
  constructor(private events: Events) {}

  private noConnectionError(errorStatus: number) {
    if (HttpStatus.INTERNAL_SERVER_ERROR) {
      console.log("ERROR 500 from server");
      this.events.publish(
        Config.EventSend.SEND_BOT_MESSAGE,
        "My bran couldn't process that"
      );
    }
  }
}
