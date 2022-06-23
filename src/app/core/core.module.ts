import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DispatcherService } from './services/dispatcher.service';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';



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
