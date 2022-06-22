import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureAuthComponent } from './feature-auth.component';



@NgModule({
  declarations: [
    FeatureAuthComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeatureAuthComponent
  ]
})
export class FeatureAuthModule { }
