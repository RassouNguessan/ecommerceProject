import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreconcernsComponent } from './storeconcerns.component';

describe('StoreconcernsComponent', () => {
  let component: StoreconcernsComponent;
  let fixture: ComponentFixture<StoreconcernsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreconcernsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreconcernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
