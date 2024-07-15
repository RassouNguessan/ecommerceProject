import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritizationpayComponent } from './securitizationpay.component';

describe('SecuritizationpayComponent', () => {
  let component: SecuritizationpayComponent;
  let fixture: ComponentFixture<SecuritizationpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecuritizationpayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritizationpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
