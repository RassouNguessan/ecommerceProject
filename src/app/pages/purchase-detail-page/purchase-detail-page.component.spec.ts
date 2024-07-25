import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDetailPageComponent } from './purchase-detail-page.component';

describe('PurchaseDetailPageComponent', () => {
  let component: PurchaseDetailPageComponent;
  let fixture: ComponentFixture<PurchaseDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
