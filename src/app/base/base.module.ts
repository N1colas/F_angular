import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeaderComponent } from './base-header/base-header.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { BaseImageComponent } from './base-image/base-image.component';
import { BaseButtonComponent } from './base-button/base-button.component';



@NgModule({
  declarations: [
    BaseHeaderComponent,
    BaseInputComponent,
    BaseImageComponent,
    BaseButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseHeaderComponent,
    BaseInputComponent,
    BaseImageComponent,
    BaseButtonComponent
  ]
})
export class BaseModule { }
