import { Injectable } from '@angular/core';
import { filter, switchMap } from 'rxjs';
import { ActionTypes } from '../interfaces/app-action';
import { UserService } from '../services/user.service';
import { DispatcherService } from '../store/dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class UserMiddlewareService {

  constructor(
    private user:UserService,
    private dispatcher:DispatcherService
  ) {
    this.dispatcher.action$
      .pipe(
        filter(action=>action.type == ActionTypes.USER_LOGIN_REQUEST),
        switchMap(action => this.user.process(action))
      )
      .subscribe(
        data => {
          if(data.msg == 'Unknown user') {
            this.dispatcher.dispatch({
              type:ActionTypes.USER_LOGIN_REQUEST_FAILURE, payload:data
            })
          }

          else {
            this.dispatcher.dispatch({
              type:ActionTypes.USER_LOGIN_REQUEST_SUCCESS, payload:data
            })
          }

        }
      );
   }
}
