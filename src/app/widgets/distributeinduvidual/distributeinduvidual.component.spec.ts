import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DistributeinduvidualComponent } from "./distributeinduvidual.component";

describe("DistributeinduvidualComponent", () => {
  let component: DistributeinduvidualComponent;
  let fixture: ComponentFixture<DistributeinduvidualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributeinduvidualComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DistributeinduvidualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
