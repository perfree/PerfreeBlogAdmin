import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditorConfig} from "../../../shared/components/markdown-editor/editor-config";
import {MarkdownEditorComponent} from "../../../shared/components/markdown-editor/markdown-editor.component";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.less']
})
export class ArticleCreateComponent implements OnInit {
  validateForm!: FormGroup;
  rightValidateForm!: FormGroup;
  // markdown编辑器配置
  editorConfig: EditorConfig = new EditorConfig();
  // markdown内容
  markdownContent: string = '';
  @ViewChild('markdownEditor') markdownEditor!: MarkdownEditorComponent;

  // 卡片响应宽度
  cardWidth = {
    lnzLg: 14,
    lnzXl: 16,
    rnzLg: 10,
    rnzXl: 8
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editorConfig.height = '640';
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
    });
    this.rightValidateForm = this.fb.group({
      address: [null, [Validators.required]],
    });
  }

  /**
   * 收缩右侧边栏
   */
  shrinkRight() {
    this.cardWidth = {
      lnzLg: 24,
      lnzXl: 24,
      rnzLg: 0,
      rnzXl: 0
    }
    let ele: any = document.getElementById('expandBtn');
    ele.style.display = 'inline-block';
    this.markdownEditor.resize('100%', '640');
  }

  /**
   * 展开右侧边栏
   */
  expandRight() {
    let ele: any = document.getElementById('expandBtn');
    ele.style.display = 'none';
    this.cardWidth = {
      lnzLg: 14,
      lnzXl: 16,
      rnzLg: 10,
      rnzXl: 8
    }
    this.markdownEditor.resize('100%', '640');
  }
}
