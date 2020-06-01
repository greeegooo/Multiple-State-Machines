import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { CrudService } from './providers/crud.service';
import { WizardComponent } from './components/wizard/wizard.component';
import { IngresoDeCuitComponent } from './components/evaluacion/ingreso-de-cuit/ingreso-de-cuit.component';
import { ConfirmarDatosClienteComponent } from './components/evaluacion/confirmar-datos-cliente/confirmar-datos-cliente.component';
import { ConfirmarDatosNoClienteComponent } from './components/evaluacion/confirmar-datos-no-cliente/confirmar-datos-no-cliente.component';
import { PendienteDocumentacionCalificacionComponent } from './components/calificacion/pendiente-documentacion-calificacion/pendiente-documentacion-calificacion.component';
import { ControlDocumentacionCalificacionComponent } from './components/calificacion/control-documentacion-calificacion/control-documentacion-calificacion.component';
import { PendienteDocumentacionLiquidacionComponent } from './components/liquidacion/pendiente-documentacion-liquidacion/pendiente-documentacion-liquidacion.component';
import { ControlDocumentacionLiquidacionComponent } from './components/liquidacion/control-documentacion-liquidacion/control-documentacion-liquidacion.component';
import { FinalizadaComponent } from './components/liquidacion/finalizada/finalizada.component';
import { DatosSolicitudComponent } from './components/datos-solicitud/datos-solicitud.component';
import { EstadoSolicitudComponent } from './components/estado-solicitud/estado-solicitud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SolicitudesComponent,
    SolicitudComponent,
    WizardComponent,
    IngresoDeCuitComponent,
    ConfirmarDatosClienteComponent,
    ConfirmarDatosNoClienteComponent,
    PendienteDocumentacionCalificacionComponent,
    ControlDocumentacionCalificacionComponent,
    PendienteDocumentacionLiquidacionComponent,
    ControlDocumentacionLiquidacionComponent,
    FinalizadaComponent,
    DatosSolicitudComponent,
    EstadoSolicitudComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'solicitudes', component: SolicitudesComponent },
      { path: 'solicitudes/:id', component: SolicitudComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
