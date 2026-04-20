import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilteredRadioButton } from './home-filtered-radio-button';

describe('HomeFilteredRadioButton', () => {
  let component: HomeFilteredRadioButton;
  let fixture: ComponentFixture<HomeFilteredRadioButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFilteredRadioButton],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFilteredRadioButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
