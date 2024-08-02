import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchaseRecentViewComponent } from "./purchase-recent-view.component";

describe("PurchaseRecentViewComponent", () => {
  let component: PurchaseRecentViewComponent;
  let fixture: ComponentFixture<PurchaseRecentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseRecentViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseRecentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
