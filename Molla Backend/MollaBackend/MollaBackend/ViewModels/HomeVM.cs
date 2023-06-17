using MollaBackend.Models;

namespace MollaBackend.ViewModels
{
	public class HomeVM
	{
		public IEnumerable<Slider> Sliders { get; set; }
        public IEnumerable<Featured> Features { get; set; }
    }
}
