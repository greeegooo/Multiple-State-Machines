import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../providers/crud.service';
import { Solicitud } from '../../models/solicitud.model';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html'
})
export class SolicitudComponent implements OnInit {

  controller: CrudService<Solicitud>;
  solicitud: Solicitud;

  constructor(
    private crudAdapter: CrudService<Solicitud>,
    private route: ActivatedRoute)
  {
    this.controller = crudAdapter.name("solicitud");
  }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.controller.getById(params['id']).subscribe(
            result => this.solicitud = result,
            error => console.error(error)
          );
        }
      }
    );
  }
}
