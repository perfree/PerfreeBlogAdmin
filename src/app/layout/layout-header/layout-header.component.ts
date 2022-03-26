import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Storage} from "../../core/net/storage";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.less']
})
export class LayoutHeaderComponent implements OnInit {

  @Input() isCollapsed: boolean = false;
  @Output() isCollapsedChange = new EventEmitter<boolean>();

  user: any;
  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.storage.get(environment.local.user);
  }

  collapsedChange() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

  logOut() {
    this.storage.remove(environment.local.user);
    this.storage.remove(environment.local.token);
    this.router.navigate(['/login']);
  }
}
