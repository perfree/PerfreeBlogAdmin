import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InstallService} from "../../../service/install/install.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.less']
})
export class InstallComponent implements OnInit {
  dataBaseValidateForm!: FormGroup;
  adminValidateForm!: FormGroup;
  dataBaseType = 'mysql';
  isLoading = false;

  current = 0;
  constructor(
    private fb: FormBuilder,
    private installService: InstallService,
    private router: Router,
    private message: NzMessageService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.dataBaseValidateForm = this.fb.group({
      dataBaseType: ['mysql', [Validators.required]],
      dataBaseAddress: [null, [Validators.required]],
      dataBasePort: [null, [Validators.required]],
      dataBaseName: [null],
      dataBaseUserName: [null, [Validators.required]],
      dataBasePassword: [null, [Validators.required]]
    });
    this.adminValidateForm = this.fb.group({
      userName: [null, [Validators.required]],
      account: [null, [Validators.required]],
      password: [null, [Validators.required]],
      email: [null, [Validators.required]]
    });
  }

  initDataBase(): void{
    if (this.dataBaseValidateForm.valid) {
      this.isLoading = true;
      this.installService.checkDataBase(this.dataBaseValidateForm.value).subscribe((res: any) => {
        if (res.code === 200) {
          if (res.data) {
            this.isLoading = false;
            this.modal.confirm({
              nzTitle: '提示',
              nzContent: '检测到数据库已存在,是否跳过数据库初始化?重新初始化数据库将造成已存在的数据丢失',
              nzCancelText: '重新初始化',
              nzOnOk: () => this.initDataBaseHandle(1),
              nzOnCancel: () => this.initDataBaseHandle(2)
            });
          } else {
            this.initDataBaseHandle(3);
          }
        } else {
          this.isLoading = false;
          this.message.create('error', res.msg);
        }
      });
    } else {
      Object.values(this.dataBaseValidateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  /**
   * 安装
   * @param type 类型: 1跳过,2覆盖,3正常
   */
  initDataBaseHandle(type: number): void{
    this.isLoading = true;
    this.dataBaseValidateForm.value.installType = type;
    this.installService.install(this.dataBaseValidateForm.value).subscribe((res: any) => {
      this.isLoading = false;
      if (res.code === 200) {
        this.next();
      } else {
        this.message.create('error', res.msg);
      }
    });
  }

  initUser(): void{
    if (this.adminValidateForm.valid) {
      this.isLoading = true;
      this.installService.initUser(this.adminValidateForm.value).subscribe((res: any) => {
        if (res.code === 200) {
          this.message.create('success', '安装完成,您可在登录后进行网站的进一步设置~');
          this.router.navigate(['/login']);
        } else {
          this.isLoading = false;
          this.message.create('error', res.msg);
        }
      });
    } else {
      Object.values(this.adminValidateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  changeType(): void{
    this.dataBaseType = this.dataBaseValidateForm.value.dataBaseType;
    let dataBaseAddress = this.dataBaseValidateForm.get('dataBaseAddress');
    let dataBasePort = this.dataBaseValidateForm.get('dataBasePort');
    let dataBaseUserName = this.dataBaseValidateForm.get('dataBaseUserName');
    let dataBasePassword = this.dataBaseValidateForm.get('dataBasePassword');
    if (this.dataBaseType == 'sqlite') {
      dataBaseAddress?.clearValidators();
      dataBasePort?.clearValidators();
      dataBaseUserName?.clearValidators();
      dataBasePassword?.clearValidators();
    } else {
      dataBaseAddress?.setValidators(Validators.required);
      dataBasePort?.setValidators(Validators.required);
      dataBaseUserName?.setValidators(Validators.required);
      dataBasePassword?.setValidators(Validators.required);
    }
    dataBaseAddress?.updateValueAndValidity();
    dataBasePort?.updateValueAndValidity();
    dataBaseUserName?.updateValueAndValidity();
    dataBasePassword?.updateValueAndValidity();
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  done(): void {
    console.log('done');
  }
}
