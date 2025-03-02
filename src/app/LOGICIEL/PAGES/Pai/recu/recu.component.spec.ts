import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuComponent } from './recu.component';

describe('RecuComponent', () => {
  let component: RecuComponent;
  let fixture: ComponentFixture<RecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
