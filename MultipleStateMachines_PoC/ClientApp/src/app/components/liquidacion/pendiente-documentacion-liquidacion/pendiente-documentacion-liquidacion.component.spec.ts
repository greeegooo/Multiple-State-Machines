import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendienteDocumentacionLiquidacionComponent } from './pendiente-documentacion-liquidacion.component';

describe('PendienteDocumentacionLiquidacionComponent', () => {
  let component: PendienteDocumentacionLiquidacionComponent;
  let fixture: ComponentFixture<PendienteDocumentacionLiquidacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendienteDocumentacionLiquidacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendienteDocumentacionLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
