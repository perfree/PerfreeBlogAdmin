import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SHARED_ZORRO_MODULES} from "./shared-zorro.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';



@NgModule({
  declarations: [
    MarkdownEditorComponent
  ],
  imports: [
    ...SHARED_ZORRO_MODULES,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
    exports: [
        ...SHARED_ZORRO_MODULES,
        ReactiveFormsModule,
        MarkdownEditorComponent
    ]
})
export class SharedModule { }
