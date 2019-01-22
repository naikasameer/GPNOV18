import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61086Component } from './comp61086.component';

describe('Comp61086Component', () => {
  let component: Comp61086Component;
  let fixture: ComponentFixture<Comp61086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
