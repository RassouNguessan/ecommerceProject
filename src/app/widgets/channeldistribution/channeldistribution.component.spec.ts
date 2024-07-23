import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChanneldistributionComponent } from "./channeldistribution.component";

describe("ChanneldistributionComponent", () => {
  let component: ChanneldistributionComponent;
  let fixture: ComponentFixture<ChanneldistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanneldistributionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChanneldistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
