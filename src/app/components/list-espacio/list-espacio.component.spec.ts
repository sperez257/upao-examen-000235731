import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEspacioComponent } from './list-espacio.component';

describe('ListEspacioComponent', () => {
  let component: ListEspacioComponent;
  let fixture: ComponentFixture<ListEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEspacioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
