import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScondeplusComponent } from './scondeplus.component';

describe('ScondeplusComponent', () => {
  let component: ScondeplusComponent;
  let fixture: ComponentFixture<ScondeplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScondeplusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScondeplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
