import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AppAction } from '../interfaces/app-action';
import { AppState } from '../interfaces/app-state';
import { MessageService } from './message.service';
import { NetworkService } from './network.service';
import { UserService } from './user.service';

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

  constructor(
    user:UserService,
    message:MessageService,
    network:NetworkService,
  ) {
    console.log('DispatcherService');
    network.online$.subscribe(status => console.log('connected',status))
  }
}
