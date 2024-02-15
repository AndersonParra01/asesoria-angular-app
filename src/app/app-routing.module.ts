import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  //Usuario final

  //Administrador
  {
    path: 'administrator',
    loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule)
  },

  {
    path: '',
    loadChildren: () => import('./pages/website/website.module').then((m) => m.WebsiteModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
