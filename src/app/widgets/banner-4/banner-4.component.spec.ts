import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Banner4Component } from "./banner-4.component";

describe("Banner4Component", () => {
  let component: Banner4Component;
  let fixture: ComponentFixture<Banner4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banner4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Banner4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
