import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottiesucessComponent } from './lottiesucess.component';

describe('LottiesucessComponent', () => {
  let component: LottiesucessComponent;
  let fixture: ComponentFixture<LottiesucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottiesucessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottiesucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
