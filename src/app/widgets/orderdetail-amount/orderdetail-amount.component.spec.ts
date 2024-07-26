import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetailAmountComponent } from './orderdetail-amount.component';

describe('OrderdetailAmountComponent', () => {
  let component: OrderdetailAmountComponent;
  let fixture: ComponentFixture<OrderdetailAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderdetailAmountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderdetailAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
