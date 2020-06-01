import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizadaComponent } from './finalizada.component';

describe('FinalizadaComponent', () => {
  let component: FinalizadaComponent;
  let fixture: ComponentFixture<FinalizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
