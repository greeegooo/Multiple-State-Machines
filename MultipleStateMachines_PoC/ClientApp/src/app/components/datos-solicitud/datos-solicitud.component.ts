import { Component, OnInit, Input } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';

@Component({
  selector: 'datos',
  templateUrl: './datos-solicitud.component.html',
  styleUrls: ['./datos-solicitud.component.css']
})
export class DatosSolicitudComponent implements OnInit {

  @Input() solicitud: Solicitud;

  constructor() { }

  ngOnInit() {
  }

}
