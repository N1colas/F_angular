import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, Subject } from 'rxjs';
import { ActionTypes, AppAction } from '../interfaces/app-action';
import { AppManager } from '../interfaces/app-manager';
import { AppUser } from '../interfaces/app-user';

@Injectable()
export class UserService implements AppManager<AppUser, {msg:string}> {

  data$ = new BehaviorSubject<AppUser[]>([]);
  AUTH ="http://192.168.6.64:3030/auth"
  private TOCKEN =''

  constructor(private http:HttpClient) { }

  process(action: AppAction<AppUser | Partial<AppUser>>): Observable<{ msg: string; }> {

    switch(action.type) {
      case ActionTypes.USER_LOGIN_REQUEST:
        return this.login(<Omit<AppUser, 'id'>>action.payload)
          .pipe(
            map(this.toObjectConnected)
            );
    }

    return of({msg:'implement'});
  }


  private login(credentials:Omit<AppUser, 'id'>): Observable<boolean> {
    const val = new Subject<boolean>();

    this.http
      .post<{access_token:string}>(this.AUTH+"/login", credentials)
      .pipe(
        catchError(err=>of(null))
      )
      .subscribe(data => {
        if(data?.access_token) {
          this.TOCKEN = data.access_token;
          val.next(true)
        } else {
          val.next(false)
        }
      })

      return val;
  }

  private register(credentials:Omit<AppUser, 'id'>) {
    this.http
      .post(this.AUTH+"/register", credentials)
      .subscribe(console.log)
  }

  private toObjectConnected(connected:boolean) {
    return {msg: connected ? 'User is logged':'Unknown user'}
  }
}
