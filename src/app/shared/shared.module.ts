import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LabelDirective } from './directives/label.directive';
import { SidebarComponent } from './layout/sidebar/sidebar.component'
import { TopbarComponent } from './layout/topbar/topbar.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component'

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { Prueba1Component } from './components/prueba1/prueba1.component';

@NgModule({
  declarations: [
    LabelDirective,
    SidebarComponent,
    TopbarComponent,
    PadreComponent,
    HijoComponent,
    Prueba1Component
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonModule,
    TabViewModule

  ],
  exports: [SidebarComponent, TopbarComponent]
})
export class SharedModule { }
