import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../service/login/login.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Storage} from "../../../core/net/storage";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  isLoading = false;
  constructor(private fb: FormBuilder,
              private message: NzMessageService,
              private loginService: LoginService,
              private storage: Storage,
              private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      account: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.isLoading = true;
      const formData = new FormData();
      formData.append('account', this.validateForm.value.account);
      formData.append('password', this.validateForm.value.password);
      this.loginService.login(formData).subscribe((res: any) => {
        this.isLoading = false;
        if (res.code === 200) {
          this.storage.set({key: environment.local.token, value: res.data.token});
          this.storage.set({key: environment.local.user, value: res.data.user});
          this.router.navigate(['/']);
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
}
