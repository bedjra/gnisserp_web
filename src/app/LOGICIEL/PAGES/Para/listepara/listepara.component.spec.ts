import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeparaComponent } from './listepara.component';

describe('ListeparaComponent', () => {
  let component: ListeparaComponent;
  let fixture: ComponentFixture<ListeparaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeparaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
