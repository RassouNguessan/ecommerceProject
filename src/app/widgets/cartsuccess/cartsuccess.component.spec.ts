import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CartsuccessComponent } from "./cartsuccess.component";

describe("CartsuccessComponent", () => {
  let component: CartsuccessComponent;
  let fixture: ComponentFixture<CartsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartsuccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
