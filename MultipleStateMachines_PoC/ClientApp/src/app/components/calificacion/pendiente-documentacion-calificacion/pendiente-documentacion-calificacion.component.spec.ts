import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendienteDocumentacionCalificacionComponent } from './pendiente-documentacion-calificacion.component';

describe('PendienteDocumentacionCalificacionComponent', () => {
  let component: PendienteDocumentacionCalificacionComponent;
  let fixture: ComponentFixture<PendienteDocumentacionCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendienteDocumentacionCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendienteDocumentacionCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
