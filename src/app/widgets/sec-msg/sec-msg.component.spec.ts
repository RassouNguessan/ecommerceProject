import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SecMsgComponent } from "./sec-msg.component";

describe("SecMsgComponent", () => {
  let component: SecMsgComponent;
  let fixture: ComponentFixture<SecMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecMsgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
