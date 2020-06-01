import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoDeCuitComponent } from './ingreso-de-cuit.component';

describe('IngresoDeCuitComponent', () => {
  let component: IngresoDeCuitComponent;
  let fixture: ComponentFixture<IngresoDeCuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoDeCuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoDeCuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
