import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDataLoadingPage } from './first-data-loading-page';

describe('FirstDataLoadingPage', () => {
  let component: FirstDataLoadingPage;
  let fixture: ComponentFixture<FirstDataLoadingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstDataLoadingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstDataLoadingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
