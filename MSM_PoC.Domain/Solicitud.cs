using System;
using System.Collections.Generic;
using System.Text;

namespace MSM_PoC.Domain
{
    public class Solicitud
    {
        public int Id { get; set; }

        public EstadoSolicitud Estado { get; set; }
    }

    public enum EstadoSolicitud
    {
        IngresoCUIT,
        ConfirmarDatosCliente,
        ConfirmarDatosNoCliente,
        PendienteDocumentacionCalificacion,
        ControlDocumentacionCalificacion,
        PendienteDocumentacionLiquidacion,
        ControlDocumentacionLiquidacion,
        Finalizada
    }
}
