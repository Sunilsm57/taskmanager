import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  isSidebarClosed = false;
  showSideNav: boolean = false;
  rollOuts: boolean = false;
  monitoring: boolean = false;
  log_img = '../../assets/images/fiberify-logo (1).png';

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
    this.showSideNav = false;
    this.rollOuts = false;
    this.monitoring = false;
    if (this.isSidebarClosed == true) {
      this.log_img = '../../assets/images/fy-logo.png';
    } else {
      this.log_img = '../../assets/images/fiberify-logo (1).png';
    }
  }

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
    this.rollOuts = false;
    this.monitoring = false;
  }
  rollOutMenu() {
    this.showSideNav = false;
    this.rollOuts = !this.rollOuts;
    this.monitoring = false;
  }
  monitoringDown() {
    this.showSideNav = false;
    this.rollOuts = false;
    this.monitoring = !this.monitoring;
  }
}
