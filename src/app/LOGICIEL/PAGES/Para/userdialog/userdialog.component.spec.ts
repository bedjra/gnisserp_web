import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdialogComponent } from './userdialog.component';

describe('UserdialogComponent', () => {
  let component: UserdialogComponent;
  let fixture: ComponentFixture<UserdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
