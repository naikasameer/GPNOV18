import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61078Component } from './comp61078.component';

describe('Comp61078Component', () => {
  let component: Comp61078Component;
  let fixture: ComponentFixture<Comp61078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
