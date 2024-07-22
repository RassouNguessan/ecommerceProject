import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartButtonComponent } from './add-cart-button.component';

describe('AddCartButtonComponent', () => {
  let component: AddCartButtonComponent;
  let fixture: ComponentFixture<AddCartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCartButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
