using MollaBackend.Data;
using MollaBackend.Models;
using MollaBackend.Services.Interfaces;
using MollaBackend.ViewModels;

namespace MollaBackend.Services
{
	public class LayoutService : ILayoutService
	{
		private readonly AppDbContext _context;
		public LayoutService(AppDbContext context)
		{
			_context = context;
		}

		public LayoutVM GetAll()
		{
			Dictionary<string,string> settings =  _context.Settings.AsEnumerable().ToDictionary(m => m.Key, m => m.Value);

			LayoutVM home = new() { 
				Settings= settings,
				
			};

			return home;
		}

	
	}
}
