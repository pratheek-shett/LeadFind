import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDetailsPage } from './lead-details-page';

describe('LeadDetailsPage', () => {
  let component: LeadDetailsPage;
  let fixture: ComponentFixture<LeadDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
