import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEnterprisePageComponent } from './register-enterprise-page.component';

describe('RegisterEnterprisePageComponent', () => {
  let component: RegisterEnterprisePageComponent;
  let fixture: ComponentFixture<RegisterEnterprisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterEnterprisePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEnterprisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
