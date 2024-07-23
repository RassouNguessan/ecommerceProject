import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LottieSuccesComponent } from "./lottie-succes.component";

describe("LottieSuccesComponent", () => {
  let component: LottieSuccesComponent;
  let fixture: ComponentFixture<LottieSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottieSuccesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LottieSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
