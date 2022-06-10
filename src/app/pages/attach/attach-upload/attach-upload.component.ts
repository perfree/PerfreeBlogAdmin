import { Component, OnInit } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";
import {NzUploadChangeParam} from "ng-zorro-antd/upload";

@Component({
  selector: 'app-attach-upload',
  templateUrl: './attach-upload.component.html',
  styleUrls: ['./attach-upload.component.less']
})
export class AttachUploadComponent implements OnInit {

  constructor(private msg: NzMessageService) { }

  ngOnInit(): void {
  }

  /**
   * 文件上传进度改变
   * @param file
   */
  handleChange({ file}: NzUploadChangeParam): void {
    const status = file.status;
    if (status === 'done') {
      this.msg.success(`${file.name} 上传成功`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} 上传失败`);
    }
  }
}
