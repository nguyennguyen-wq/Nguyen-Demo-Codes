using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Collections.Generic;
using System.Linq;
using System.Text;    
using angular_new_app.Models;
namespace angular_new_app.Data
{
    public partial class BlogContext : DbContext
    {
        public BlogContext()
        {
        }

        public BlogContext(DbContextOptions<BlogContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Medlem> Medlems { get; set; }			
        public virtual DbSet<Kontingent> Kontingents { get; set; }
        		
	protected override void OnModelCreating(ModelBuilder modelBuilder)
        {	
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");
            modelBuilder.Entity<Medlem>(entity =>
            {	
	    modelBuilder.Entity<Medlem>()
            .HasOne<Kontingent>(s => s.Kontingent)
            .WithMany(g => g.Medlems)
            .HasForeignKey(s => s.CurrentKontintId);	
            });
            modelBuilder.Entity<Kontingent>(entity =>
            {
             entity.Property(e => e.Name).HasMaxLength(50);
            });		
	}
	}
}
