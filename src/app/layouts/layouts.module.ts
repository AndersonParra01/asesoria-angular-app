import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    LayoutsRoutingModule
  ],
  exports: [
    
  ]
})
export class LayoutsModule { }
