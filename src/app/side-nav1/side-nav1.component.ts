import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav1',
  templateUrl: './side-nav1.component.html',
  styleUrls: ['./side-nav1.component.css'],
})
export class SideNav1Component {
  sidebarOpen: any = false;
  constructor() {
    this.sidebarOpen = JSON.parse(
      localStorage.getItem('sidebarOpen') || 'false'
    );
    console.log(this.sidebarOpen);
  }
  isSidebarClosed = false;
  showSideNav: boolean = false;
  rollOuts: boolean = false;
  monitoring: boolean = false;
  log_img = '../../assets/images/fiberify-logo (1).png'; // Initial logo image

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log(this.sidebarOpen);
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
