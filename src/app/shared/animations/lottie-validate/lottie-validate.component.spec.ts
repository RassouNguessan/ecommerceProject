import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieValidateComponent } from './lottie-validate.component';

describe('LottieValidateComponent', () => {
  let component: LottieValidateComponent;
  let fixture: ComponentFixture<LottieValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottieValidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottieValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
