using Microsoft.AspNetCore.Mvc;
using MollaBackend.Data;
using MollaBackend.Models;
using MollaBackend.Services.Interfaces;
using MollaBackend.ViewModels;
using System.Diagnostics;

namespace MollaBackend.Controllers
{
    public class HomeController : Controller
    {

		private readonly AppDbContext _context;

		private readonly ISliderService _sliderService;
        private readonly IFeaturedService _featuredservice;


        public HomeController(AppDbContext context,ISliderService sliderService,IFeaturedService featuredService )
		{
			_context = context;
			_sliderService = sliderService;
			_featuredservice = featuredService;
		
		}
		public async Task<IActionResult> Index()
        {
			IEnumerable<Slider> sliders = await _sliderService.GetAllAsync();
			IEnumerable<Featured> featureds = await _featuredservice.GetFeaturedsDatas();

            HomeVM home = new()
			{
				Sliders = sliders,
				Features= featureds,
			
			};
			return View(home);
        }

 
    }
}