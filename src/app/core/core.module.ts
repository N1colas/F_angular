import { NgModule } from '@angular/core';
import { DispatcherService, UserService, MessageService } from '@core';
import { UserMiddlewareService } from './middleware/user-middleware.service';



@NgModule({
  declarations: [],
  imports: [],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useValue: () => alert('App Started'),
    //   multi:true
    // },
    DispatcherService,
    UserService,
    MessageService
  ]
})
export class CoreModule {

  constructor(
    dispatcher:DispatcherService,
    userMidelware:UserMiddlewareService,
    user:UserService
  ) {

  }
}
