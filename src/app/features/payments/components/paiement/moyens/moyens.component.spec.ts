import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyensComponent } from './moyens.component';

describe('MoyensComponent', () => {
  let component: MoyensComponent;
  let fixture: ComponentFixture<MoyensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoyensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoyensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
