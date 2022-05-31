using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular_new_app.Models;
using angular_new_app.Controllers;

namespace  angular_new_app.Services
{
    public interface IMedlemsService
    {
        Task<IEnumerable<Medlem>> GetMedlemsList();
        Task<Medlem> GetMedlemById(Guid id);
		Task<Medlem> GetMedlemByEtternavn(string etternavn);
		Task<Medlem> GetMedlemByFornavn(string fornavn); 
        Task<Medlem> CreateMedlem(Medlem medlem);
        Task UpdateMedlem(Medlem medlem);
        Task DeleteMedlem(Medlem medlem);
	}
} 
