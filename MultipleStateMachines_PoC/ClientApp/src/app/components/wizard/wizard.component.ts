import { Component, OnInit, Input } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  @Input() solicitud: Solicitud;

  constructor() { }

  ngOnInit() {
  }

}
