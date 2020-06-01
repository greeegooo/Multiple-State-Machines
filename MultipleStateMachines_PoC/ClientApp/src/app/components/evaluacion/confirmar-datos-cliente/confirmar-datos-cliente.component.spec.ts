import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarDatosClienteComponent } from './confirmar-datos-cliente.component';

describe('ConfirmarDatosClienteComponent', () => {
  let component: ConfirmarDatosClienteComponent;
  let fixture: ComponentFixture<ConfirmarDatosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarDatosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarDatosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
