using MollaBackend.Models;

namespace MollaBackend.Services.Interfaces
{
    public interface IFeaturedService
    {
        Task<IEnumerable<Featured>> GetFeaturedsDatas();
    }
}
