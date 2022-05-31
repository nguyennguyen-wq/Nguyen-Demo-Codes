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
    public class MedlemsController : ControllerBase
    {
        private readonly IMedlemsService _medlemService;
        public MedlemsController(IMedlemsService medlemService)
        {
            _medlemService = medlemService;
        }
        
	[HttpGet]
        public async Task<IEnumerable<Medlem>> Get()
        {
            return await _medlemService.GetMedlemsList();
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<Medlem>> Get(Guid id)
        {
            var medlem = await _medlemService.GetMedlemById(id);
            if (medlem == null)
            {
                return NotFound();
            }
            return Ok(medlem);
        }
		 
		[HttpPost]
        public async Task<ActionResult<Medlem>> Post(Medlem medlem)
        {
            await _medlemService.CreateMedlem(medlem);
            return CreatedAtAction("Post", new { id = medlem.Medlem_Id }, medlem);
        }

		[HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, Medlem medlem)
        {
            if (id != medlem.Medlem_Id)
            {
                return BadRequest("Not a valid player id");
            }
            await _medlemService.UpdateMedlem(medlem);
            return NoContent();
        }

		[HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if (id == null)
                return BadRequest("Not a valid player id");
            var medlem = await _medlemService.GetMedlemById(id);
            if (medlem == null)
            {
                return NotFound();
            }
            await _medlemService.DeleteMedlem(medlem);
            return NoContent();
        }		
    }
}
