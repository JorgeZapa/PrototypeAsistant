import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../../model/User/User';
import { fromPromise } from 'rxjs/observable/fromPromise'


@Injectable()
export class LocalDataProvider {


  private readonly USER_STORAGE_KEY= "User";

  constructor(private storage: Storage) {
  }


  getUser(): Observable<User>{
    return fromPromise(this.storage.get(this.USER_STORAGE_KEY));
  }

  saveUser(user: User): Observable<any>{
    return fromPromise(this.storage.set(this.USER_STORAGE_KEY, user));
  }

}
