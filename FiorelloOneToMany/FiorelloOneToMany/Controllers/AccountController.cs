using FiorelloOneToMany.Models;
using FiorelloOneToMany.VıewModels.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FiorelloOneToMany.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> _usermanager;
        private readonly SignInManager<AppUser> _signInManager;
        public AccountController(UserManager<AppUser> usermanager, SignInManager<AppUser> signInManager)
        {
            _usermanager = usermanager;
            _signInManager = signInManager;
        }

        [HttpGet]
        public  IActionResult SignUp()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> SignUp(RegisterVM request)
        {
            if(!ModelState.IsValid)
            {
                return View(request);
            }

            AppUser user = new()
            {
                UserName = request.UserName,
                Email = request.Email,
                FullName = request.FullName,
            };

            var result=await _usermanager.CreateAsync(user,request.Password);

            if(!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty,error.Description);
                }
                return View(request);
            }


            await _signInManager.SignInAsync(user,false);

            return RedirectToAction("Index","Home");
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}
