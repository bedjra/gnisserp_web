import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenustatistqueComponent } from './menustatistque.component';

describe('MenustatistqueComponent', () => {
  let component: MenustatistqueComponent;
  let fixture: ComponentFixture<MenustatistqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenustatistqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenustatistqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
