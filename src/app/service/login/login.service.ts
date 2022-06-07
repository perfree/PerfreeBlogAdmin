import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  /**
   * 登录
   * @param data
   */
  login(data: any) {
    return this.http.post('/api/login', data);
  }
}
