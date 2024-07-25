import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIndividualPageComponent } from './register-individual-page.component';

describe('RegisterIndividualPageComponent', () => {
  let component: RegisterIndividualPageComponent;
  let fixture: ComponentFixture<RegisterIndividualPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterIndividualPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterIndividualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
