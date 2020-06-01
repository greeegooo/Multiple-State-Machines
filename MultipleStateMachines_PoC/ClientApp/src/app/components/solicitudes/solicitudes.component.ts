import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../../providers/crud.service';
import { Solicitud } from '../../models/solicitud.model';


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html'
})
export class SolicitudesComponent implements OnInit {

  solicitudes: Solicitud[];
  controller: CrudService<Solicitud>;

  constructor(
    private crudAdapter: CrudService<Solicitud>)
  {
    this.controller = crudAdapter.name("solicitud");
  }

  ngOnInit() {
    this.controller.get()
      .subscribe(
        result => this.solicitudes = result,
        error => console.error(error)
      );
  }
}
