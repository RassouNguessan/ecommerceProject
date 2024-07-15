import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannier3Component } from './bannier-3.component';

describe('Bannier3Component', () => {
  let component: Bannier3Component;
  let fixture: ComponentFixture<Bannier3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannier3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannier3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
