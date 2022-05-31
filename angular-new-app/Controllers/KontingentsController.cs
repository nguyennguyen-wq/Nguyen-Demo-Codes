using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular_new_app.Models;
using angular_new_app.Services;
using angular_new_app.Data;   
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
namespace angular_new_app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class KontingentsController : ControllerBase
    {
		private readonly IKontingentsService _kontingentService;
        public KontingentsController(IKontingentsService kontingentService)
        {
            _kontingentService = kontingentService;
        }
        [HttpGet]
        public async Task<IEnumerable<Kontingent>> Get()
        {
            return await _kontingentService.GetKontingentsList();
        }
    }
}
