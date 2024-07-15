import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddBasketComponent } from './btn-add-basket.component';

describe('BtnAddBasketComponent', () => {
  let component: BtnAddBasketComponent;
  let fixture: ComponentFixture<BtnAddBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnAddBasketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAddBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
