using Microsoft.AspNetCore.Identity;

namespace MollaBackend.Models
{
    public class AppUser:IdentityUser
    {
        public string FullName { get; set; }
    }
}
