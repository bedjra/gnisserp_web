import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButcatComponent } from './butcat.component';

describe('ButcatComponent', () => {
  let component: ButcatComponent;
  let fixture: ComponentFixture<ButcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButcatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
