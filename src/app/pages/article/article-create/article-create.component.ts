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
  // markdown编辑器
  @ViewChild('markdownEditor') markdownEditor!: MarkdownEditorComponent;
  // 右侧边栏是否收缩
  articleRightIsShrink: boolean = false;

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
   * 收缩写文章页右侧边栏
   */
  shrinkArticleRight() {
    this.articleRightIsShrink = true;
    setTimeout(() => {
      this.markdownEditor.resize('100%', '640');
    }, 300);
  }

  /**
   * 展开写文章页右侧边栏
   */
  expandArticleRight() {
    this.articleRightIsShrink = false;
    setTimeout(() => {
      this.markdownEditor.resize('100%', '640');
    }, 300);
  }
}
