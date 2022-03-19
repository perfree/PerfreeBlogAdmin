import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'install', loadChildren: () => import('./pages/install/install.module').then(m => m.InstallModule)},
  {path: 'exception', loadChildren: () => import('./pages/exception/exception.module').then(m => m.ExceptionModule)},
  {path: '**', redirectTo: 'exception/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
