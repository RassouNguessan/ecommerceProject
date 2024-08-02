import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ImgBlockComponent } from "./img-block.component";

describe("ImgBlockComponent", () => {
  let component: ImgBlockComponent;
  let fixture: ComponentFixture<ImgBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImgBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
