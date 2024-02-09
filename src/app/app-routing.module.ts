import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  //Usuario final
  {
    path: '',
    loadChildren: () => import('./pages/website/website.module').then((m) => m.WebsiteModule)
  },
  //Administrador
  {
    path: 'administrator',
    loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
