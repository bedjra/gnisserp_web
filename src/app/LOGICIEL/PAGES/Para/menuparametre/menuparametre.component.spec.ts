import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuparametreComponent } from './menuparametre.component';

describe('MenuparametreComponent', () => {
  let component: MenuparametreComponent;
  let fixture: ComponentFixture<MenuparametreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuparametreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuparametreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
