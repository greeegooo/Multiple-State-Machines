"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EstadoSolicitud;
(function (EstadoSolicitud) {
    EstadoSolicitud[EstadoSolicitud["IngresoCUIT"] = 0] = "IngresoCUIT";
    EstadoSolicitud[EstadoSolicitud["ConfirmarDatosCliente"] = 1] = "ConfirmarDatosCliente";
    EstadoSolicitud[EstadoSolicitud["ConfirmarDatosNoCliente"] = 2] = "ConfirmarDatosNoCliente";
    EstadoSolicitud[EstadoSolicitud["PendienteDocumentacionCalificacion"] = 3] = "PendienteDocumentacionCalificacion";
    EstadoSolicitud[EstadoSolicitud["ControlDocumentacionCalificacion"] = 4] = "ControlDocumentacionCalificacion";
    EstadoSolicitud[EstadoSolicitud["PendienteDocumentacionLiquidacion"] = 5] = "PendienteDocumentacionLiquidacion";
    EstadoSolicitud[EstadoSolicitud["ControlDocumentacionLiquidacion"] = 6] = "ControlDocumentacionLiquidacion";
    EstadoSolicitud[EstadoSolicitud["Finalizada"] = 7] = "Finalizada";
})(EstadoSolicitud = exports.EstadoSolicitud || (exports.EstadoSolicitud = {}));
//# sourceMappingURL=EstadoSolicitud.js.map