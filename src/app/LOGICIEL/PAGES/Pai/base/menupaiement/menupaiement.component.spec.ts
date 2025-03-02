import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupaiementComponent } from './menupaiement.component';

describe('MenupaiementComponent', () => {
  let component: MenupaiementComponent;
  let fixture: ComponentFixture<MenupaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenupaiementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenupaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
