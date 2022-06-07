import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InstallService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 安装
   * @param data data
   */
  install(data: any) {
    return this.http.post("/api/install/installDataBase",data);
  }

  /**
   * 获取安装状态
   */
  installStatus() {
    return this.http.get("/api/install/installStatus");
  }

  /**
   * 检查数据库
   * @param data data
   */
  checkDataBase(data: any) {
    return this.http.post("/api/install/checkDataBase",data);
  }

  /**
   * 初始化用户信息
   * @param data data
   */
  initUser(data: any) {
    return this.http.post("/api/install/initUser",data);
  }
}
