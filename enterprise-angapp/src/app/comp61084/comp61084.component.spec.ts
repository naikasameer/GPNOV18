import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61084Component } from './comp61084.component';

describe('Comp61084Component', () => {
  let component: Comp61084Component;
  let fixture: ComponentFixture<Comp61084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
