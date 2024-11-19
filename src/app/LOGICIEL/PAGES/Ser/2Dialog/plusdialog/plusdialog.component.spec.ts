import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusdialogComponent } from './plusdialog.component';

describe('PlusdialogComponent', () => {
  let component: PlusdialogComponent;
  let fixture: ComponentFixture<PlusdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
