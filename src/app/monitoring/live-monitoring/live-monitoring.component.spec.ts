import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveMonitoringComponent } from './live-monitoring.component';

describe('LiveMonitoringComponent', () => {
  let component: LiveMonitoringComponent;
  let fixture: ComponentFixture<LiveMonitoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveMonitoringComponent]
    });
    fixture = TestBed.createComponent(LiveMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
