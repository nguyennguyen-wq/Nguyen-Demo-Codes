using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular_new_app.Data;
using angular_new_app.Models;
using Microsoft.EntityFrameworkCore;

namespace angular_new_app.Services
{
    public class KontingentsService : IKontingentsService
    {
        private readonly BlogContext _context;

        public KontingentsService(BlogContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Kontingent>> GetKontingentsList()
        {
            return await _context.Kontingents
                .ToListAsync();
        }
    }
}
