import { SimpleGeoposition } from './../../model/geolocation/simpleGeolocation';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../../model/User/User';
import { fromPromise } from 'rxjs/observable/fromPromise'


@Injectable()
export class LocalDataProvider {


  private readonly USER_STORAGE_KEY = "User";

  private readonly HOME_LOCATION_STORAGE_KEY = "homeLocation";

  constructor(private storage: Storage) {
  }


  getUser(): Observable<User>{
    return fromPromise(this.storage.get(this.USER_STORAGE_KEY));
  }

  saveUser(user: User): Observable<any>{
    return fromPromise(this.storage.set(this.USER_STORAGE_KEY, user));
  }

  getHomeLocation():Observable<SimpleGeoposition>{
    return new Observable((subscriber)=>{
      this.storage.get(this.HOME_LOCATION_STORAGE_KEY).then(res=>{
        subscriber.next(res);
        subscriber.complete();
      }).catch(error=>{
        subscriber.error(error);
      })
    });
  }

  saveHomeLocation(geolocation: SimpleGeoposition):Observable<any>{
    return fromPromise(this.storage.set(this.HOME_LOCATION_STORAGE_KEY,geolocation));
  }

}
