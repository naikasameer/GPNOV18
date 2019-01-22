import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61072Component } from './comp61072.component';

describe('Comp61072Component', () => {
  let component: Comp61072Component;
  let fixture: ComponentFixture<Comp61072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
