import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Banner3Component } from "./banner-3.component";


describe("Banner3Component", () => {
  let component: Banner3Component;
  let fixture: ComponentFixture<Banner3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banner3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Banner3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
