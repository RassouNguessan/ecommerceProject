import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DistributionChannelComponent } from "./distribution-channel.component";

describe("DistributionChannelComponent", () => {
  let component: DistributionChannelComponent;
  let fixture: ComponentFixture<DistributionChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionChannelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DistributionChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
