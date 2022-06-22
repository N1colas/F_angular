import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureProfilComponent } from './feature-profil.component';



@NgModule({
  declarations: [
    FeatureProfilComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeatureProfilComponent
  ]
})
export class FeatureProfilModule { }
