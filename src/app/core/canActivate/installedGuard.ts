import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {InstallService} from "../../service/install/install.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InstalledGuard implements CanActivate {
    constructor(
      private router: Router,
      private installService: InstallService
    ) {
    }

    canActivate(): Observable<boolean> | boolean {
      return new Observable<boolean>(observer => {
        this.installService.installStatus().subscribe((res: any) => {
          if (res.code === 200) {
            if (res.data) {
              this.router.navigate(['/']);
            } else {
              observer.next(true);
            }
            return;
          }
          observer.next(true);
        });
      });
    }
}


