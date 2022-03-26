import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutDefaultComponent} from "./layout-default/layout-default.component";
import {SharedModule} from "../shared/shared.module";
import {LayoutHeaderComponent} from './layout-header/layout-header.component';


@NgModule({
  declarations: [
    LayoutDefaultComponent,
    LayoutHeaderComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
