import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOtpComponent } from './payment-otp.component';

describe('PaymentOtpComponent', () => {
  let component: PaymentOtpComponent;
  let fixture: ComponentFixture<PaymentOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentOtpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
