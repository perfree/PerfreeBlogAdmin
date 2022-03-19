import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutDefaultComponent} from "./layout/layout-default/layout-default.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)}
    ]
  },
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
