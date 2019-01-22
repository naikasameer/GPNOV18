import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61073Component } from './comp61073.component';

describe('Comp61073Component', () => {
  let component: Comp61073Component;
  let fixture: ComponentFixture<Comp61073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
