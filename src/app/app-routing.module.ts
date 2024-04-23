import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveMonitoringComponent } from './monitoring/live-monitoring/live-monitoring.component';
import { CasesComponent } from './monitoring/cases/cases.component';
import { AssetsComponent } from './monitoring/assets/assets.component';
import { GeoFencesComponent } from './monitoring/geo-fences/geo-fences.component';
import { MonitoringDashboardComponent } from './dashBoard/monitoring-dashboard/monitoring-dashboard.component';
import { RollOutDashboardComponent } from './dashBoard/roll-out-dashboard/roll-out-dashboard.component';

const routes: Routes = [
  {
    path: 'live-monitoring',
    component: LiveMonitoringComponent,
  },
  {
    path: 'cases',
    component: CasesComponent,
  },
  {
    path: 'assets',
    component: AssetsComponent,
  },
  {
    path: 'geofences',
    component: GeoFencesComponent,
  },
  {
    path: 'monitoring-dashboard',
    component: MonitoringDashboardComponent,
  },
  {
    path: 'rollout-dashboard',
    component: RollOutDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
