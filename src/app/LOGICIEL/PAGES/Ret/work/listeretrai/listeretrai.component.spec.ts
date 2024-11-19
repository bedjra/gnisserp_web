import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeretraiComponent } from './listeretrai.component';

describe('ListeretraiComponent', () => {
  let component: ListeretraiComponent;
  let fixture: ComponentFixture<ListeretraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeretraiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeretraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
