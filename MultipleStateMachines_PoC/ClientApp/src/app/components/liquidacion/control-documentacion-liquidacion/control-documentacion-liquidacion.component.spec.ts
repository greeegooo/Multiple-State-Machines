import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDocumentacionLiquidacionComponent } from './control-documentacion-liquidacion.component';

describe('ControlDocumentacionLiquidacionComponent', () => {
  let component: ControlDocumentacionLiquidacionComponent;
  let fixture: ComponentFixture<ControlDocumentacionLiquidacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDocumentacionLiquidacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDocumentacionLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
