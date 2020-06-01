import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDocumentacionCalificacionComponent } from './control-documentacion-calificacion.component';

describe('ControlDocumentacionCalificacionComponent', () => {
  let component: ControlDocumentacionCalificacionComponent;
  let fixture: ComponentFixture<ControlDocumentacionCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDocumentacionCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDocumentacionCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
