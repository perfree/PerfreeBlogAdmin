import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd/modal";
import {AttachUploadComponent} from "../attach-upload/attach-upload.component";
import {AttachService} from "../../../service/attach/attach.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-attach-list',
  templateUrl: './attach-list.component.html',
  styleUrls: ['./attach-list.component.less']
})
export class AttachListComponent implements OnInit {
  validateForm!: FormGroup;
  pageSize: number = 16;
  currentPage: number = 1;
  attachList: any[] = [];
  total: number = 0;
  loading:boolean = true;
  constructor(private fb: FormBuilder,
              private viewContainerRef: ViewContainerRef,
              private modal: NzModalService,
              private msg: NzMessageService,
              private attachService: AttachService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
    });

    this.pageList();
  }

  /**
   * 上传附件
   */
  uploadAttach() {
    this.modal.create({
      nzTitle: '上传附件',
      nzContent: AttachUploadComponent,
      nzWidth: '600px',
      nzFooter: null,
      nzViewContainerRef: this.viewContainerRef,
      nzOnOk: () => { },
      nzOnCancel: () => {this.pageList();}
    });
  }

  /**
   * 加载列表
   */
  pageList(): void {
    this.loading = true;
    const param = {
      size: this.pageSize,
      current: this.currentPage
    }
    this.attachService.pageList(param).subscribe((res: any) => {
      if (res.code === 200) {
        console.log(res.data)
        this.attachList = res.data.records;
        this.total = res.data.total;
        this.loading = false;
      } else {
        this.msg.error(res.msg);
      }
    });
  }
}
