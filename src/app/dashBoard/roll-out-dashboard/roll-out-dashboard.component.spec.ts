import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollOutDashboardComponent } from './roll-out-dashboard.component';

describe('RollOutDashboardComponent', () => {
  let component: RollOutDashboardComponent;
  let fixture: ComponentFixture<RollOutDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RollOutDashboardComponent]
    });
    fixture = TestBed.createComponent(RollOutDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
