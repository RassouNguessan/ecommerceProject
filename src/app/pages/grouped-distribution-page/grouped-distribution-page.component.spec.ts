import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GroupedDistributionPageComponent } from "./grouped-distribution-page.component";

describe("GroupedDistributionPageComponent", () => {
  let component: GroupedDistributionPageComponent;
  let fixture: ComponentFixture<GroupedDistributionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedDistributionPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupedDistributionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
