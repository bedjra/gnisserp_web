import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaudepotComponent } from './nouveaudepot.component';

describe('NouveaudepotComponent', () => {
  let component: NouveaudepotComponent;
  let fixture: ComponentFixture<NouveaudepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveaudepotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveaudepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
