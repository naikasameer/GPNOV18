import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61089Component } from './comp61089.component';

describe('Comp61089Component', () => {
  let component: Comp61089Component;
  let fixture: ComponentFixture<Comp61089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
