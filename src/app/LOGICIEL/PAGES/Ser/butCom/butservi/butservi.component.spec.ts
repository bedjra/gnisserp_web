import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButserviComponent } from './butservi.component';

describe('ButserviComponent', () => {
  let component: ButserviComponent;
  let fixture: ComponentFixture<ButserviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButserviComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButserviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
