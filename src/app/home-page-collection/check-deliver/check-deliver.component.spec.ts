import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDeliverComponent } from './check-deliver.component';

describe('CheckDeliverComponent', () => {
  let component: CheckDeliverComponent;
  let fixture: ComponentFixture<CheckDeliverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDeliverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
