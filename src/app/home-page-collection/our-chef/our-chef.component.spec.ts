import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurChefComponent } from './our-chef.component';

describe('OurChefComponent', () => {
  let component: OurChefComponent;
  let fixture: ComponentFixture<OurChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
