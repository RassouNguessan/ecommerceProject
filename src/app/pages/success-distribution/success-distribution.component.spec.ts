import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDistributionComponent } from './success-distribution.component';

describe('SuccessDistributionComponent', () => {
  let component: SuccessDistributionComponent;
  let fixture: ComponentFixture<SuccessDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessDistributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
