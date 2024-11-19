import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiacategorieComponent } from './diacategorie.component';

describe('DiacategorieComponent', () => {
  let component: DiacategorieComponent;
  let fixture: ComponentFixture<DiacategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiacategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiacategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
