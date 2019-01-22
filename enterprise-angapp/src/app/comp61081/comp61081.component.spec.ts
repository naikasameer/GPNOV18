import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61081Component } from './comp61081.component';

describe('Comp61081Component', () => {
  let component: Comp61081Component;
  let fixture: ComponentFixture<Comp61081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
