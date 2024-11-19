import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestaComponent } from './listesta.component';

describe('ListestaComponent', () => {
  let component: ListestaComponent;
  let fixture: ComponentFixture<ListestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListestaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
