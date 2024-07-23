import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GreatdealComponent } from "./greatdeal.component";

describe("GreatdealComponent", () => {
  let component: GreatdealComponent;
  let fixture: ComponentFixture<GreatdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreatdealComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GreatdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
