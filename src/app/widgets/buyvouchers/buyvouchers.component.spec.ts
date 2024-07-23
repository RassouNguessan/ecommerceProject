import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BuyvouchersComponent } from "./buyvouchers.component";

describe("BuyvouchersComponent", () => {
  let component: BuyvouchersComponent;
  let fixture: ComponentFixture<BuyvouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyvouchersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyvouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
