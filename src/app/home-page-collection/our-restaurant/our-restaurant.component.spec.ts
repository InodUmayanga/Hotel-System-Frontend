import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRestaurantComponent } from './our-restaurant.component';

describe('OurRestaurantComponent', () => {
  let component: OurRestaurantComponent;
  let fixture: ComponentFixture<OurRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
