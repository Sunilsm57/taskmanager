import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { LiveMonitoringComponent } from './monitoring/live-monitoring/live-monitoring.component';
import { MonitoringDashboardComponent } from './dashBoard/monitoring-dashboard/monitoring-dashboard.component';
import { RollOutDashboardComponent } from './dashBoard/roll-out-dashboard/roll-out-dashboard.component';
import { CasesComponent } from './monitoring/cases/cases.component';
import { AssetsComponent } from './monitoring/assets/assets.component';
import { GeoFencesComponent } from './monitoring/geo-fences/geo-fences.component';
import { HeaderComponent } from './header/header.component';
import { SideNav1Component } from './side-nav1/side-nav1.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavBarComponent,
    LiveMonitoringComponent,
    MonitoringDashboardComponent,
    RollOutDashboardComponent,
    CasesComponent,
    AssetsComponent,
    GeoFencesComponent,
    HeaderComponent,
    SideNav1Component,
    TaskListComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    TaskItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
