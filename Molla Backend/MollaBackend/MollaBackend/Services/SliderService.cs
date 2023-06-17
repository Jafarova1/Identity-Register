using Microsoft.EntityFrameworkCore;
using MollaBackend.Data;
using MollaBackend.Models;
using MollaBackend.Services.Interfaces;

namespace MollaBackend.Services
{
	public class SliderService:ISliderService
	{
		private readonly AppDbContext _context;

		public SliderService(AppDbContext context)
		{
			_context = context;
		}

		public async Task<IEnumerable<Slider>> GetAllAsync()
		{
			return await _context.Sliders.ToListAsync();
		}

	}
}
