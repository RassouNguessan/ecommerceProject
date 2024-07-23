import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CardVisaMastercardPaymentComponent } from "./card-visa-mastercard-payment.component";

describe("CardVisaMastercardPaymentComponent", () => {
  let component: CardVisaMastercardPaymentComponent;
  let fixture: ComponentFixture<CardVisaMastercardPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVisaMastercardPaymentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardVisaMastercardPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
