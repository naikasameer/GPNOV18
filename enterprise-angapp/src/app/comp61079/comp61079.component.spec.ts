import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61079Component } from './comp61079.component';

describe('Comp61079Component', () => {
  let component: Comp61079Component;
  let fixture: ComponentFixture<Comp61079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
