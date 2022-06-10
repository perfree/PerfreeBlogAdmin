import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AttachService {

  constructor(private http: HttpClient) { }

  /**
   * 获取菜单树
   */
  pageList(param: any) {
    return this.http.post('/api/admin/attach/list', param);
  }
}
