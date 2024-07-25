import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodPageComponent } from './payment-method-page.component';

describe('PaymentMethodPageComponent', () => {
  let component: PaymentMethodPageComponent;
  let fixture: ComponentFixture<PaymentMethodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentMethodPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
