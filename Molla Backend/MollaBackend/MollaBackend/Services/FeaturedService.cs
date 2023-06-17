using Microsoft.EntityFrameworkCore;
using MollaBackend.Data;
using MollaBackend.Models;
using MollaBackend.Services.Interfaces;

namespace MollaBackend.Services
{
    public class FeaturedService:IFeaturedService
    {
        private readonly AppDbContext _context;
        public FeaturedService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Featured>> GetFeaturedsDatas()
        {
            return await _context.Features.ToListAsync();
        }
    }
}
