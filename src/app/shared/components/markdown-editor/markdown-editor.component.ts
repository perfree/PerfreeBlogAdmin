import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {EditorConfig} from "./editor-config";
declare var editormd: any;
@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MarkdownEditorComponent),
      multi: true
    }
  ]
})
export class MarkdownEditorComponent implements OnInit {
  @Input() markdownContent: string = '';
  @Input() editorConfig?: EditorConfig;
  // editor md 对象
  private markdownEditor: any;

  private onChange = (_: any) => { };
  private onTouched = () => { };

  constructor(
  ) { }

  ngOnInit(): void {
    this.editorStartup();
  }

  writeValue(obj: any): void {
    this.markdownContent = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private editorStartup(): void {
    this.createEditor(this.editorConfig);
  }

  private createEditor(editorConfig: any): void {
    this.markdownEditor = editormd('markdown-editor', editorConfig);
    if (this.markdownEditor) {
      // 注册变更事件
      this.markdownEditor.on('change', () => {
        this.onChange(this.markdownContent);
        // 获取 html 格式的内容
        // console.log(this.markdownEditor.getHTML());
        // 获取 markdown 格式的内容
        // console.log(this.markdownEditor.getMarkdown());
      });
    }
  }

  /**
   * 重新渲染大小
   * @param width 宽
   * @param height 高
   */
  resize(width: string, height: string): void {
    setTimeout(() => {
      this.markdownEditor.resize(width, height);
    })
  }
}
