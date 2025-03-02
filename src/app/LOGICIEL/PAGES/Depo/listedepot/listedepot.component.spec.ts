import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedepotComponent } from './listedepot.component';

describe('ListedepotComponent', () => {
  let component: ListedepotComponent;
  let fixture: ComponentFixture<ListedepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedepotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
