import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionSummaryPageComponent } from './distribution-summary-page.component';

describe('DistributionSummaryPageComponent', () => {
  let component: DistributionSummaryPageComponent;
  let fixture: ComponentFixture<DistributionSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionSummaryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
