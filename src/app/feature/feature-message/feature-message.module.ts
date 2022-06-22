import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureMessageListComponent } from './feature-message-list/feature-message-list.component';
import { FeatureMessageSenderComponent } from './feature-message-sender/feature-message-sender.component';
import { FeatureMessageListItemComponent } from './feature-message-list-item/feature-message-list-item.component';



@NgModule({
  declarations: [
    FeatureMessageListComponent,
    FeatureMessageSenderComponent,
    FeatureMessageListItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeatureMessageListComponent,
    FeatureMessageSenderComponent
  ]
})
export class FeatureMessageModule { }
