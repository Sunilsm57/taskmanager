import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { SideNav1Component } from '../side-nav1/side-nav1.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild(SideNav1Component) child?: SideNav1Component;
  sidebarOpen: any = false;
  ngAfterViewInit() {
    // Here, you can safely access child properties or methods after the view has been initialized
  }
  onToggleSidebar() {
    if (this.child) {
      this.child.toggleSidebar();
    }
  }
}
