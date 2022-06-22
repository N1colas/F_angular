import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAuthModule } from './feature-auth/feature-auth.module';
import { FeaturePhotoModule } from './feature-photo/feature-photo.module';
import { FeatureProfilModule } from './feature-profil/feature-profil.module';
import { FeatureMessageModule } from './feature-message/feature-message.module';



@NgModule({
  exports: [
    CommonModule,
    FeatureAuthModule,
    FeaturePhotoModule,
    FeatureProfilModule,
    FeatureMessageModule
  ]
})
export class FeatureModule { }
