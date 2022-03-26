import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.less']
})
export class LayoutDefaultComponent implements OnInit {
  isCollapsed = false;

  menuList: any[] = [];
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((res: any) => {
      this.menuList = res.data;
    });
  }

}
