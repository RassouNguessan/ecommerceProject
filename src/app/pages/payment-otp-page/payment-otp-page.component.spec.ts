import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOtpPageComponent } from './payment-otp-page.component';

describe('PaymentOtpPageComponent', () => {
  let component: PaymentOtpPageComponent;
  let fixture: ComponentFixture<PaymentOtpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentOtpPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentOtpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
