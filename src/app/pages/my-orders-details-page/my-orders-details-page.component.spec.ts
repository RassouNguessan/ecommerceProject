import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersDetailsPageComponent } from './my-orders-details-page.component';

describe('MyOrdersDetailsPageComponent', () => {
  let component: MyOrdersDetailsPageComponent;
  let fixture: ComponentFixture<MyOrdersDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOrdersDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrdersDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
