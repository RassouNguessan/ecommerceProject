import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MeansPaymentComponent } from "./means-payment.component";

describe("MeansPaymentComponent", () => {
  let component: MeansPaymentComponent;
  let fixture: ComponentFixture<MeansPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeansPaymentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeansPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
