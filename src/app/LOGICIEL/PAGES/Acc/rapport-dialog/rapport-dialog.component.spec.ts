import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportDialogComponent } from './rapport-dialog.component';

describe('RapportDialogComponent', () => {
  let component: RapportDialogComponent;
  let fixture: ComponentFixture<RapportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapportDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
