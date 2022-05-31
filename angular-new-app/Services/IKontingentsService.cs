﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular_new_app.Models;
using angular_new_app.Controllers;

namespace angular_new_app.Services
{
    public interface IKontingentsService
    {
        Task<IEnumerable<Kontingent>> GetKontingentsList();
    }
}


        