import { NgModule } from '@angular/core';
import { FeatureModule } from '../feature/feature.module';
import { SharedModule } from '../shared/shared.module';
import { ViewAuthComponent } from './view-auth/view-auth.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { ViewProfilComponent } from './view-profil/view-profil.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';
import { ViewTemplateComponent } from './view-template/view-template.component';



@NgModule({
  declarations: [
    ViewAuthComponent,
    ViewMessageComponent,
    ViewProfilComponent,
    ViewPhotoComponent,
    ViewTemplateComponent
  ],
  imports: [
    FeatureModule,
    SharedModule
  ],
  exports: [
    ViewAuthComponent,
    ViewMessageComponent,
    ViewProfilComponent,
    ViewPhotoComponent
  ]
})
export class ViewModule { }
