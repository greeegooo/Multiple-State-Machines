import { Component, OnInit, Input } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';

@Component({
  selector: 'estado',
  templateUrl: './estado-solicitud.component.html',
  styleUrls: ['./estado-solicitud.component.css']
})
export class EstadoSolicitudComponent implements OnInit {

  @Input() solicitud: Solicitud;

  constructor() { }

  ngOnInit() {
  }

}
