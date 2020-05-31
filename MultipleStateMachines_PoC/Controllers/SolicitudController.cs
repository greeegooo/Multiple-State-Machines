using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MSM_PoC.Business;

namespace MultipleStateMachine_PoC.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SolicitudController : ControllerBase
    {
        private ISolicitudBusiness solicitudBusiness;

        public SolicitudController(ISolicitudBusiness solicitudBusiness)
        {
            this.solicitudBusiness = solicitudBusiness;
        }

        // GET: api/Solicitud
        [HttpGet]
        public IActionResult Get() => Ok(solicitudBusiness.Get());

        // GET: api/Solicitud/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id) => Ok(solicitudBusiness.Get(id));

        // POST: api/Solicitud
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Solicitud/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
