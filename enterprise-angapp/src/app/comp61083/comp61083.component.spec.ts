import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61083Component } from './comp61083.component';

describe('Comp61083Component', () => {
  let component: Comp61083Component;
  let fixture: ComponentFixture<Comp61083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
