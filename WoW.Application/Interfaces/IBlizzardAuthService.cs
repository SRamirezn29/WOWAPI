namespace WoW.Application.Interfaces;

public interface IBlizzardAuthService
{
    Task<string> GetAccessTokenAsync();
}