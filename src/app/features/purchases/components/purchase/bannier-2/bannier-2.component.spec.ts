import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannier2Component } from './bannier-2.component';

describe('Bannier2Component', () => {
  let component: Bannier2Component;
  let fixture: ComponentFixture<Bannier2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannier2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannier2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
