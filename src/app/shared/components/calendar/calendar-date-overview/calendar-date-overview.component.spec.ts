import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDateOverviewComponent } from './calendar-date-overview.component';

describe('CalendarDateOverviewComponent', () => {
  let component: CalendarDateOverviewComponent;
  let fixture: ComponentFixture<CalendarDateOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDateOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
