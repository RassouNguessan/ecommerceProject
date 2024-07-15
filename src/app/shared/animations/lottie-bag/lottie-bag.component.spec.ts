import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieBagComponent } from './lottie-bag.component';

describe('LottieBagComponent', () => {
  let component: LottieBagComponent;
  let fixture: ComponentFixture<LottieBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottieBagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottieBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
