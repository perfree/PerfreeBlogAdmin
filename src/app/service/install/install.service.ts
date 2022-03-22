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
    return this.http.post("/install",data);
  }
}
