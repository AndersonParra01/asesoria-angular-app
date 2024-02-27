import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';

//PrimeNG Components
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DinamycFormComponent } from './dinamyc-form/dinamyc-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { RoleComponent } from './role/role.component';
import { RoleFormComponent } from './role/role-form/role-form.component';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    HomeComponent,
    DinamycFormComponent,
    RoleComponent,
    RoleFormComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    PasswordModule,
    ToastModule,
    MessagesModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    DialogModule,
    SharedModule
  ],
  exports: [DinamycFormComponent],
})
export class UserModule { }
