
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace angular_new_app.Models
{
    public partial class Kontingent
    {
        public Kontingent()
        {
            Medlems = new HashSet<Medlem>();
        }
		    
        [Key]           		 
        public int KontintId  { get; set; }
        public string Name { get; set; } 
        public virtual ICollection<Medlem> Medlems { get; set; }
    }
}
   