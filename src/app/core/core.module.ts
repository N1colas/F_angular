import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { DispatcherService } from '@core';



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
    user:UserService,
    message:MessageService,
  ) {
    console.log(dispatcher)
  }
}
