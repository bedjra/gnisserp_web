import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaprestationComponent } from './diaprestation.component';

describe('DiaprestationComponent', () => {
  let component: DiaprestationComponent;
  let fixture: ComponentFixture<DiaprestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaprestationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaprestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
