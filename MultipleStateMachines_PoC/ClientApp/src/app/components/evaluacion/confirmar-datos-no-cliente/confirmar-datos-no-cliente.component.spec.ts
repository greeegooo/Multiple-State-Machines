import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarDatosNoClienteComponent } from './confirmar-datos-no-cliente.component';

describe('ConfirmarDatosNoClienteComponent', () => {
  let component: ConfirmarDatosNoClienteComponent;
  let fixture: ComponentFixture<ConfirmarDatosNoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarDatosNoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarDatosNoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
