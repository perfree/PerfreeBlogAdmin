import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Storage} from "../net/storage";

/**
 * 自定义路由守卫，实现用户登录检测
 */
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(
        private router: Router,
        private storage: Storage
    ) {
    }

    /**
     * @description 路由守卫用户登录检测
     * @author liuxiangwei
     * @date 2020-12-01 17:14:28
     * @returns 返回boolean的类型
     */
    canActivate(): boolean {
        const token = this.storage.get(environment.local.token);
        if (token !== null && token !== undefined && token !== '') {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}


