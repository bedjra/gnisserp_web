import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuretraiteComponent } from './menuretraite.component';

describe('MenuretraiteComponent', () => {
  let component: MenuretraiteComponent;
  let fixture: ComponentFixture<MenuretraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuretraiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuretraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
