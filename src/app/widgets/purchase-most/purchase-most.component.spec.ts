import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchaseMostComponent } from "./purchase-most.component";

describe("PurchaseMostComponent", () => {
  let component: PurchaseMostComponent;
  let fixture: ComponentFixture<PurchaseMostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseMostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseMostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
