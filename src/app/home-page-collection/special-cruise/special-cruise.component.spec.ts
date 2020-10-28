import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCruiseComponent } from './special-cruise.component';

describe('SpecialCruiseComponent', () => {
  let component: SpecialCruiseComponent;
  let fixture: ComponentFixture<SpecialCruiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialCruiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
