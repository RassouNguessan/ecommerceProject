import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingChargeComponent } from './loading-charge.component';

describe('LoadingChargeComponent', () => {
  let component: LoadingChargeComponent;
  let fixture: ComponentFixture<LoadingChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingChargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
