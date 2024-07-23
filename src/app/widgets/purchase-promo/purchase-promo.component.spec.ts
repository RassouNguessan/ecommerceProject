import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchasePromoComponent } from "./purchase-promo.component";

describe("PurchasePromoComponent", () => {
  let component: PurchasePromoComponent;
  let fixture: ComponentFixture<PurchasePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasePromoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
