import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudepotComponent } from './menudepot.component';

describe('MenudepotComponent', () => {
  let component: MenudepotComponent;
  let fixture: ComponentFixture<MenudepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenudepotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenudepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
