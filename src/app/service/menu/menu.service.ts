import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  /**
   * 获取菜单树
   */
  getMenuTree() {
    return this.http.get('/api/admin/menu/menuTree');
  }
}
