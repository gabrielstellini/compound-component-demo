import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDirective } from './toggle.directive';

describe('ToggleDirective', () => {
  let component: ToggleDirective;
  let fixture: ComponentFixture<ToggleDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
