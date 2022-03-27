import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NzMenuItemDirective} from "ng-zorro-antd/menu";

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.less']
})
export class LayoutDefaultComponent implements OnInit {
  isCollapsed = false;

  menuList: any[] = [];

  breadcrumbList: any[] = [];
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((res: any) => {
      this.menuList = res.data;
    });
  }

  changeMenu(menu: any) {
    this.breadcrumbList.length = 0;
    if (menu.pid !== '-1') {
      const parent = this.menuList.filter(item => item.id === menu.pid);
      console.log(parent)
      this.breadcrumbList.concat(parent);
    }
    this.breadcrumbList.push(menu);
    console.log(this.breadcrumbList)
  }
}
