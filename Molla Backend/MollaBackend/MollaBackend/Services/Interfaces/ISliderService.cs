using MollaBackend.Models;

namespace MollaBackend.Services.Interfaces
{
	public interface ISliderService
	{
		Task<IEnumerable<Slider>> GetAllAsync();
	}
}
