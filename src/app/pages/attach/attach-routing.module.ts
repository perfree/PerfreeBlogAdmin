import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AttachListComponent} from "./attach-list/attach-list.component";

const routes: Routes = [
  {path: '', component: AttachListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttachRoutingModule { }
