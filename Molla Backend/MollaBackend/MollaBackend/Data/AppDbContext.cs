using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MollaBackend.Models;

namespace MollaBackend.Data
{
	public class AppDbContext : IdentityDbContext<AppUser>
	{
		public AppDbContext(DbContextOptions<AppDbContext> option) : base(option)
		{
		}
		public DbSet<Slider> Sliders { get; set; }
        public DbSet<Featured> Features { get; set; }
        public DbSet<Setting> Settings { get; set; }
		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
			modelBuilder.Entity<Slider>().HasQueryFilter(m => !m.SoftDelete);
            modelBuilder.Entity<Featured>().HasQueryFilter(m => !m.SoftDelete);
        }
	}
}
