using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular_new_app.Data;
using angular_new_app.Models;
using angular_new_app.Services;
using Microsoft.EntityFrameworkCore;
namespace angular_new_app.Services
{
    public class MedlemsService : IMedlemsService
    {
        private readonly BlogContext _context;
        public MedlemsService(BlogContext context)
        {
            _context = context;
        }
 
        public async Task<IEnumerable<Medlem>> GetMedlemsList()
        {
            return await _context.Medlems
               .Include(x => x.Kontingent)
	       .OrderBy(x => x.Fornavn )
               .ToListAsync();
        }
		
        public async Task<Medlem> GetMedlemById(Guid id)
        {
            return await _context.Medlems
                .Include(x => x.Kontingent)
		.FirstOrDefaultAsync(x => x.Medlem_Id == id);
        }
		
        public async Task<Medlem> GetMedlemByEtternavn(string etternavn)
        {
            return await _context.Medlems
                .Include(x => x.Kontingent)
		.FirstOrDefaultAsync(x => x.Etternavn == etternavn);
        }
 		
        public async Task<Medlem> GetMedlemByFornavn(string fornavn)
        {
            return await _context.Medlems
                .Include(x => x.Kontingent)
		.FirstOrDefaultAsync(x => x.Fornavn == fornavn);
        }

        public async Task<Medlem> CreateMedlem(Medlem medlem)
        {
            _context.Medlems.Add(medlem);
             await _context.SaveChangesAsync();
            return medlem;
        }
		
        public async Task UpdateMedlem(Medlem medlem)
        {
            _context.Medlems.Update(medlem);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteMedlem(Medlem medlem)
        {
            _context.Medlems.Remove(medlem);
            await _context.SaveChangesAsync();
        }	
    }
}
