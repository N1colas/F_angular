import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  exports: [
    /** Angular Integration */
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    /** Third Parties */
  ]
})
export class IntegrationModule { }
