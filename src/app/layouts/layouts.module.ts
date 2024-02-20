import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';


import { LayoutsRoutingModule } from './layouts-routing.module';
import { AdministratorComponent } from './administrator/administrator.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    AdministratorComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule
  ],
  exports: [

  ]
})
export class LayoutsModule { }
