import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SHARED_ZORRO_MODULES} from "./shared-zorro.module";



@NgModule({
  declarations: [],
  imports: [
    ...SHARED_ZORRO_MODULES,
    CommonModule
  ],
  exports: [
    ...SHARED_ZORRO_MODULES,
  ]
})
export class SharedModule { }
