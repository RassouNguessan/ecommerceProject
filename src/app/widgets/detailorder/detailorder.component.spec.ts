import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailorderComponent } from './detailorder.component';

describe('DetailorderComponent', () => {
  let component: DetailorderComponent;
  let fixture: ComponentFixture<DetailorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
