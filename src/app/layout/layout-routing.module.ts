import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutDefaultComponent} from "./layout-default/layout-default.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.DashboardModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
