import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromosComponent } from './promos.component';

describe('PromosComponent', () => {
  let component: PromosComponent;
  let fixture: ComponentFixture<PromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
