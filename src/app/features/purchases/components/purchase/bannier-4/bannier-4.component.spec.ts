import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannier4Component } from './bannier-4.component';

describe('Bannier4Component', () => {
  let component: Bannier4Component;
  let fixture: ComponentFixture<Bannier4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannier4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannier4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
