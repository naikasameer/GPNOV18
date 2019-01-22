import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61082Component } from './comp61082.component';

describe('Comp61082Component', () => {
  let component: Comp61082Component;
  let fixture: ComponentFixture<Comp61082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
