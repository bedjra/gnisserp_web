import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButartiComponent } from './butarti.component';

describe('ButartiComponent', () => {
  let component: ButartiComponent;
  let fixture: ComponentFixture<ButartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButartiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
