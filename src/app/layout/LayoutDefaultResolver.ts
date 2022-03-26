import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import {NzMessageService} from "ng-zorro-antd/message";
import {MenuService} from "../service/menu/menu.service";

@Injectable()
export class LayoutDefaultResolver implements Resolve<LayoutDefaultComponent> {

  constructor(
    private router: Router,
    private menuService: MenuService,
    private message: NzMessageService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.menuService.getMenuTree().pipe(map((res: any) => {
      if (res.code === 200) {
        return res.data;
      } else {
        this.message.error('系统初始化失败,请重新登录!');
        this.router.navigateByUrl('/login');
      }
    }));
  }
}
