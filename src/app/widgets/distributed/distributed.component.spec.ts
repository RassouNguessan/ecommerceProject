import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DistributedComponent } from "./distributed.component";

describe("DistributedComponent", () => {
  let component: DistributedComponent;
  let fixture: ComponentFixture<DistributedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
