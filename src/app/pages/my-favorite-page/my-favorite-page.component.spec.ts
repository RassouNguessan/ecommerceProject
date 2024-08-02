import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoritePageComponent } from './my-favorite-page.component';

describe('MyFavoritePageComponent', () => {
  let component: MyFavoritePageComponent;
  let fixture: ComponentFixture<MyFavoritePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFavoritePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFavoritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
