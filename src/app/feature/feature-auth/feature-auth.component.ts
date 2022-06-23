import { Component } from '@angular/core';
import { DispatcherService } from '@core';
import { ActionTypes } from 'src/app/core/interfaces/app-action';
import { AppUser } from 'src/app/core/interfaces/app-user';

@Component({
  selector: 'app-feature-auth',
  templateUrl: './feature-auth.component.html',
  styleUrls: ['./feature-auth.component.scss'],
})
export class FeatureAuthComponent {
  public credentials: Omit<AppUser, 'id'> = {
    email: '',
    password: '',
  };

  constructor(public dispatcher: DispatcherService) {}

  login() {
    this.dispatcher.dispatch({
      type: ActionTypes.USER_LOGIN_REQUEST,
      payload: this.credentials,
    });
  }
}
