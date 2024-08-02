import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersPageComponent } from './my-orders-page.component';

describe('MyOrdersPageComponent', () => {
  let component: MyOrdersPageComponent;
  let fixture: ComponentFixture<MyOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOrdersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
