import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TotalPriceCardComponent } from "./total-price-card.component";

describe("TotalPriceCardComponent", () => {
  let component: TotalPriceCardComponent;
  let fixture: ComponentFixture<TotalPriceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalPriceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalPriceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
