import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauComponent } from './nouveau.component';

describe('NouveauComponent', () => {
  let component: NouveauComponent;
  let fixture: ComponentFixture<NouveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
