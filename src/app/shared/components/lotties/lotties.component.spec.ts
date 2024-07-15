import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottiesComponent } from './lotties.component';

describe('LottiesComponent', () => {
  let component: LottiesComponent;
  let fixture: ComponentFixture<LottiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
