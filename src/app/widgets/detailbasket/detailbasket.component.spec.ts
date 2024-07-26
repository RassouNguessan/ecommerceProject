import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbasketComponent } from './detailbasket.component';

describe('DetailbasketComponent', () => {
  let component: DetailbasketComponent;
  let fixture: ComponentFixture<DetailbasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailbasketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
