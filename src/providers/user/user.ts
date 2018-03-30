import { UniqueDeviceID } from "@ionic-native/unique-device-id";
import { Observable } from "rxjs/Observable";
import { LocalDataProvider } from "./../local-data/local-data";
import { User } from "./../../model/User/User";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class UserProvider {
  private loggedUser: User;

  constructor(
    private localDataProvider: LocalDataProvider,
    private uniqueDeviceID: UniqueDeviceID
  ) {}

  logUserIn(): Observable<void> {
    return new Observable<void>(subscriber => {
      this.localDataProvider.getUser().subscribe(user => {
        if (user == null) {
          this.loggedUser = new User();
          this.uniqueDeviceID
            .get()
            .then(res => {
              this.loggedUser.deviceId = res;
              console.log("no user was logged.");
              subscriber.next();
              subscriber.complete();
            })
            .catch(err => {
              console.log(err);
              console.log("setting Force device ID");
              this.loggedUser.deviceId = "PC" + Math.random();
              console.log("no user was logged.");
              subscriber.next();
              subscriber.complete();
            });
        } else {
          console.log(user);
          this.loggedUser = user;
          console.log("user was logged once before.");
          subscriber.next();
          subscriber.complete();
        }
      });
    });
  }

  updateUser(): Observable<any> {
    return this.localDataProvider.saveUser(this.loggedUser);
  }

  setLoggedUser(loggedUser: User) {
    this.loggedUser = loggedUser;
  }

  getLoggedUser(): User {
    return this.loggedUser;
  }
}
