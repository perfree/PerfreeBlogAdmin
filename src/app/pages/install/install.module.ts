import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstallRoutingModule } from './install-routing.module';
import { InstallComponent } from './install/install.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    InstallComponent
  ],
  imports: [
    CommonModule,
    InstallRoutingModule,
    SharedModule
  ]
})
export class InstallModule { }
