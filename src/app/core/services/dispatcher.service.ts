import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AppAction } from '../interfaces/app-action';
import { AppState } from '../interfaces/app-state';

// @Injectable({
//   providedIn: 'root' /** 'root' | 'any' | 'plateform' */
// })
@Injectable()
export class DispatcherService  {

  state$:BehaviorSubject<AppState> = new BehaviorSubject<AppState>( {
    currentUser: null,
    users:[],
    messages:[],
    messageOutgoing:null,
    messageIncomming:[],
    photos:[],
    errors:[]
  })

  dispatch(action:AppAction<any>): Observable<{msg:string}> {
    return of({msg:'Not implement'})
  }

  constructor() {
    console.log('DispatcherService');
  }
}
