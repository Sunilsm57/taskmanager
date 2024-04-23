import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoFencesComponent } from './geo-fences.component';

describe('GeoFencesComponent', () => {
  let component: GeoFencesComponent;
  let fixture: ComponentFixture<GeoFencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeoFencesComponent]
    });
    fixture = TestBed.createComponent(GeoFencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
