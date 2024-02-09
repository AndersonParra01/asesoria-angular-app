import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/core/not-found/not-found.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user.component';
import { LoginComponent } from '../auth/login/login.component';
import { AdministratorComponent } from './../../layouts/administrator/administrator.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'administrator',
    component: AdministratorComponent,
    children: [
      { path: 'users', component: UserComponent },
      { path: 'users/create', component: UserFormComponent },
      { path: 'users/edit/:id', component: UserFormComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
