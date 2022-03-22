import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SHARED_ZORRO_MODULES} from "./shared-zorro.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    ...SHARED_ZORRO_MODULES,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ...SHARED_ZORRO_MODULES,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
