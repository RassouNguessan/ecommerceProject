import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bannier1Component } from './bannier-1.component';

describe('Bannier1Component', () => {
  let component: Bannier1Component;
  let fixture: ComponentFixture<Bannier1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannier1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannier1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
