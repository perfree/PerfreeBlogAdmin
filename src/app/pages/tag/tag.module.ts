import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { TagListComponent } from './tag-list/tag-list.component';


@NgModule({
  declarations: [
    TagListComponent
  ],
  imports: [
    CommonModule,
    TagRoutingModule,
    SharedModule
  ]
})
export class TagModule { }
