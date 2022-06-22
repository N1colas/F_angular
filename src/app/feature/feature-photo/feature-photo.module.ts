import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeaturePhotoComponent } from './feature-photo/feature-photo.component';
import { FeaturePhotoCarouselComponent } from './feature-photo-carousel/feature-photo-carousel.component';



@NgModule({
  declarations: [
    FeaturePhotoComponent,
    FeaturePhotoCarouselComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeaturePhotoComponent,
    FeaturePhotoCarouselComponent
  ]
})
export class FeaturePhotoModule { }
