import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogretraiComponent } from './dialogretrai.component';

describe('DialogretraiComponent', () => {
  let component: DialogretraiComponent;
  let fixture: ComponentFixture<DialogretraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogretraiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogretraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
