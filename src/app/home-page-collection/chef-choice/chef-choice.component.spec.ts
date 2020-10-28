import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefChoiceComponent } from './chef-choice.component';

describe('ChefChoiceComponent', () => {
  let component: ChefChoiceComponent;
  let fixture: ComponentFixture<ChefChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
