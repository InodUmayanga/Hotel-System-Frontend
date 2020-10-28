import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurResourceComponent } from './our-resource.component';

describe('OurResourceComponent', () => {
  let component: OurResourceComponent;
  let fixture: ComponentFixture<OurResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
