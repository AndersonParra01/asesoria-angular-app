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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, UserFormComponent],
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
    ReactiveFormsModule
  ]
})
export class UserModule { }
