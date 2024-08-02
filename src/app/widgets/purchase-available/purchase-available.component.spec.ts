import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAvailableComponent } from './purchase-available.component';

describe('PurchaseAvailableComponent', () => {
  let component: PurchaseAvailableComponent;
  let fixture: ComponentFixture<PurchaseAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseAvailableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
