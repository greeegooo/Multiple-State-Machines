using MSM_PoC.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MSM_PoC.Business
{
    public class SolicitudBusiness : ISolicitudBusiness
    {
        private IList<Solicitud> solicitudes = new List<Solicitud>();

        public SolicitudBusiness()
        {
            var s1 = new Solicitud { Id = 1, Estado = EstadoSolicitud.IngresoCUIT };
            var s2 = new Solicitud { Id = 2, Estado = EstadoSolicitud.ConfirmarDatosCliente };

            solicitudes.Add(s1);
            solicitudes.Add(s2);
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Solicitud> Get()
        {
            return solicitudes;
        }

        public Solicitud Get(int id)
        {
            return solicitudes.FirstOrDefault(x => x.Id == id);
        }

        public void Post(string value)
        {
            throw new NotImplementedException();
        }

        public void Put(int id, string value)
        {
            throw new NotImplementedException();
        }
    }
}
