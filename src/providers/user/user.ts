import { UniqueDeviceID } from "@ionic-native/unique-device-id";
import { Observable } from "rxjs/Observable";
import { LocalDataProvider } from "./../local-data/local-data";
import { User } from "./../../model/User/User";
import { Injectable } from "@angular/core";

@Injectable()
export class UserProvider {
  private currentUser: User;

  constructor(
    private localDataProvider: LocalDataProvider,
    private uniqueDeviceID: UniqueDeviceID
  ) {}

  prepareUserDeviceId(): Observable<void> {
    return new Observable<void>(subscriber => {
      this.localDataProvider.getUser().subscribe(user => {
        if (user == null) {
          this.currentUser = new User();
          this.uniqueDeviceID
            .get()
            .then(res => {
              console.log(res);
              this.currentUser.deviceId=res;
              console.log("no user was logged.");
              subscriber.next();
              subscriber.complete();
            })
            .catch(err => {
              console.log(err);
              console.log("Setting Force device ID");
              this.currentUser.deviceId="PC" + Math.random();
              console.log("no user was logged.");
              subscriber.next();
              subscriber.complete();
            });
        } else {
          console.log(user);
          this.currentUser = user;
          console.log("user was logged once before.");
          subscriber.next();
          subscriber.complete();
        }
      });
    });
  }

  updateUser(): Observable<any> {
    return this.localDataProvider.saveUser(this.currentUser);
  }

  setCurrentUser(currentUser: User) {
    this.currentUser = currentUser;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
}
