import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatsComponent } from './achats.component';

describe('AchatsComponent', () => {
  let component: AchatsComponent;
  let fixture: ComponentFixture<AchatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
