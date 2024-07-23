import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SeesuccessComponent } from "./seesuccess.component";

describe("SeesuccessComponent", () => {
  let component: SeesuccessComponent;
  let fixture: ComponentFixture<SeesuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeesuccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
