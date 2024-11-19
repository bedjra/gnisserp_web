import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuserviceComponent } from './menuservice.component';

describe('MenuserviceComponent', () => {
  let component: MenuserviceComponent;
  let fixture: ComponentFixture<MenuserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
