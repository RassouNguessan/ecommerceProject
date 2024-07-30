import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCartComponent } from './success-cart.component';

describe('SuccessCartComponent', () => {
  let component: SuccessCartComponent;
  let fixture: ComponentFixture<SuccessCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
