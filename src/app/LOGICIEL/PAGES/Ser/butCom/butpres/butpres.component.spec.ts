import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButpresComponent } from './butpres.component';

describe('ButpresComponent', () => {
  let component: ButpresComponent;
  let fixture: ComponentFixture<ButpresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButpresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
