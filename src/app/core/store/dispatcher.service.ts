import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ActionTypes, AppAction } from '../interfaces/app-action';
import { AppState } from '../interfaces/app-state';



// @Injectable({
//   providedIn: 'root' /** 'root' | 'any' | 'plateform' */
// })
@Injectable()
export class DispatcherService  {

  action$ = new Subject<AppAction<any>>()

  private _state:AppState = {
    currentUser: null,
    users:[],
    messages:[],
    messageOutgoing:null,
    messageIncomming:[],
    photos:[],
    errors:[]
  };

  state$:BehaviorSubject<AppState> = new BehaviorSubject<AppState>(this._state)

  dispatch(action:AppAction<any>): Observable<{msg:string}> {
    this.action$.next(action);

    switch(action.type) {
      case ActionTypes.USER_LOGIN_REQUEST_FAILURE:
        this._state.errors.push(action.payload);
        this.state$.next(this._state);
        break;
      case ActionTypes.USER_LOGIN_REQUEST_SUCCESS:
        this._state.errors.push(action.payload);
        this.state$.next(this._state);
        break;

    }

    return of({msg:'Not implement'})
  }

  constructor(
  ) {
  }
}
