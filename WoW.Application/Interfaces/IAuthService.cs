using WoW.Application.DTOs;

namespace WoW.Application.Interfaces;

public interface IAuthService
{
    Task<bool> RegisterAsync(RegisterRequestDto registerRequest);
    Task<string?> LoginAsync(string email, string password); 
}