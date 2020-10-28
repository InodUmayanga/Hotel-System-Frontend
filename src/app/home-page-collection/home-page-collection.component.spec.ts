import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCollectionComponent } from './home-page-collection.component';

describe('HomePageCollectionComponent', () => {
  let component: HomePageCollectionComponent;
  let fixture: ComponentFixture<HomePageCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
