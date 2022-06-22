import { NgModule } from '@angular/core';
import { BaseModule } from '../base/base.module';
import { IntegrationModule } from '../integration/integration.module';



@NgModule({
  declarations: [],
  exports: [
    BaseModule,
    IntegrationModule
  ]
})
export class SharedModule { }
