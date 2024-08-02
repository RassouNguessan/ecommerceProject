import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseMessageComponent } from './purchase-message.component';

describe('PurchaseMessageComponent', () => {
  let component: PurchaseMessageComponent;
  let fixture: ComponentFixture<PurchaseMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
