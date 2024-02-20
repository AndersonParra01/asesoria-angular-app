import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LabelDirective } from './directives/label.directive';
import { SidebarComponent } from './layout/sidebar/sidebar.component'
import { TopbarComponent } from './layout/topbar/topbar.component'
@NgModule({
  declarations: [
    LabelDirective,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

  ],
  exports: [SidebarComponent, TopbarComponent]
})
export class SharedModule { }
