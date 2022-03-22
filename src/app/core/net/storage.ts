import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Storage {

  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private plateformId: object) {
    this.isBrowser = isPlatformBrowser(this.plateformId);
  }
  /**
   * @description 根据key获取localStorage的值
   * @author yang
   * @date 2022-3-01 17:13:25
   * @param  key 键
   * @param type
   * @returns   返回对应的值
   */
  get(key: string, type = 'local'): any {
    let res = '';
    if (this.isBrowser) {
      res = (window as any)[type + 'Storage'].getItem(key);
      try {
        res = JSON.parse(res);
      } catch (error) {
      }
    }
    return res;
  }
  /**
   * @description 存入localStorage
   * @author yang
   * @date 2022-3-01 17:13:25
   * @param params
   * @param  type
   */
  set(params: AnyJson | AnyJson[], type = 'local'): void{
    if (this.isBrowser) {
      const kv = Array.isArray(params) ? params : [params];
      for (const { key, value } of kv) {
        value && (window as any)[type + 'Storage'].setItem(key, typeof value === 'object' ? JSON.stringify(value) : value.toString());
      }
    }
  }
  /**
   * @description 根据键移除localStorage
   * @author yang
   * @date 2022-3-01 17:13:25
   * @param  params [key 键]
   * @param type
   */
  remove(params: string | string[], type = 'local'): void{
    if (this.isBrowser) {
      const kv = Array.isArray(params) ? params : [params];
      for (const key of kv) {
        (window as any)[type + 'Storage'].removeItem(key);
      }
    }
  }
}

export interface AnyJson {
  [key: string]: any;
}
