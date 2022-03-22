import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InstallService} from "../../../service/install/install.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.less']
})
export class InstallComponent implements OnInit {
  validateForm!: FormGroup;
  dataBaseType = 'mysql';

  constructor(
    private fb: FormBuilder,
    private installService: InstallService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      dataBaseType: ['mysql', [Validators.required]],
      dataBaseAddress: [null, [Validators.required]],
      dataBasePort: [null, [Validators.required]],
      dataBaseName: [null],
      dataBaseUserName: [null, [Validators.required]],
      dataBasePassword: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      account: [null, [Validators.required]],
      password: [null, [Validators.required]],
      email: [null]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.installService.install(this.validateForm.value).subscribe((res: any) => {
        console.log(res);
        if (res === 200) {
        } else {
          this.message.create('error', res.msg);
        }
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  changeType(): void{
    this.dataBaseType = this.validateForm.value.dataBaseType;
    let dataBaseAddress = this.validateForm.get('dataBaseAddress');
    let dataBasePort = this.validateForm.get('dataBasePort');
    let dataBaseUserName = this.validateForm.get('dataBaseUserName');
    let dataBasePassword = this.validateForm.get('dataBasePassword');
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
}
