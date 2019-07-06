import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityChartComponent } from './availability-chart.component';

describe('AvailabilityChartComponent', () => {
  let component: AvailabilityChartComponent;
  let fixture: ComponentFixture<AvailabilityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
