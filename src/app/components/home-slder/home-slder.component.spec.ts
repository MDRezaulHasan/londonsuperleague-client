import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlderComponent } from './home-slder.component';

describe('HomeSlderComponent', () => {
  let component: HomeSlderComponent;
  let fixture: ComponentFixture<HomeSlderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSlderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSlderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
