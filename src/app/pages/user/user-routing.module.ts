import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/core/not-found/not-found.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user.component';
import { AdministratorComponent } from './../../layouts/administrator/administrator.component';
import { HomeComponent } from './home/home.component';
import { PadreComponent } from '@shared/components/padre/padre.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./../auth/auth.module').then((m) => m.AuthModule) },
  {
    path: '',
    component: AdministratorComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UserComponent },
      // { path: 'users', component: PadreComponent },
      { path: 'users/create', component: UserFormComponent },
      { path: 'users/edit/:id', component: UserFormComponent },
      { path: 'roles', component: RoleComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
