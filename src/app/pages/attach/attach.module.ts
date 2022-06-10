import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttachRoutingModule } from './attach-routing.module';
import { AttachListComponent } from './attach-list/attach-list.component';
import {SharedModule} from "../../shared/shared.module";
import { AttachUploadComponent } from './attach-upload/attach-upload.component';


@NgModule({
  declarations: [
    AttachListComponent,
    AttachUploadComponent
  ],
  imports: [
    CommonModule,
    AttachRoutingModule,
    SharedModule
  ]
})
export class AttachModule { }
