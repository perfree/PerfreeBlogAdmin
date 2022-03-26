import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstallGuard} from "./core/canActivate/installGuard";
import {InstalledGuard} from "./core/canActivate/installedGuard";
import {LoginGuard} from "./core/canActivate/loginGuard";
import {LayoutDefaultResolver} from "./layout/LayoutDefaultResolver";

const routes: Routes = [
  {
    path: '',
    canActivate: [InstallGuard, LoginGuard],
    resolve: {
      data: LayoutDefaultResolver
    },
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'login',
    canActivate: [InstallGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'install',
    canActivate: [InstalledGuard],
    loadChildren: () => import('./pages/install/install.module').then(m => m.InstallModule)
  },
  {path: 'exception', loadChildren: () => import('./pages/exception/exception.module').then(m => m.ExceptionModule)},
  {path: '**', redirectTo: 'exception/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
