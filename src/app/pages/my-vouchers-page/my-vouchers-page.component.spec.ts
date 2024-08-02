import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVouchersPageComponent } from './my-vouchers-page.component';

describe('MyVouchersPageComponent', () => {
  let component: MyVouchersPageComponent;
  let fixture: ComponentFixture<MyVouchersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyVouchersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyVouchersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
