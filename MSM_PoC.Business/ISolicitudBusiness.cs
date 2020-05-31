using MSM_PoC.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace MSM_PoC.Business
{
    public interface ISolicitudBusiness
    {
        IEnumerable<Solicitud> Get();

        Solicitud Get(int id);

        void Post(string value);

        void Put(int id, string value);

        void Delete(int id);
    }
}
