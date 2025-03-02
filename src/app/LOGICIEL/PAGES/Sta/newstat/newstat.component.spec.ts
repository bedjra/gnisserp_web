import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstatComponent } from './newstat.component';

describe('NewstatComponent', () => {
  let component: NewstatComponent;
  let fixture: ComponentFixture<NewstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewstatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
