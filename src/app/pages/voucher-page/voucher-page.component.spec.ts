import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherPageComponent } from './voucher-page.component';

describe('VoucherPageComponent', () => {
  let component: VoucherPageComponent;
  let fixture: ComponentFixture<VoucherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
