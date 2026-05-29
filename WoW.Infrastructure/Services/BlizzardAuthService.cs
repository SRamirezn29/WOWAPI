using System.Net.Http.Headers;
using System.Text;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using WoW.Application.Interfaces;
using WoW.Infrastructure.Models;

namespace WoW.Infrastructure.Services;

public class BlizzardAuthService : IBlizzardAuthService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _configuration;

    public BlizzardAuthService(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _configuration = configuration;
    }

    public async Task<string> GetAccessTokenAsync()
    {
        // Extraemos las credenciales del appsettings.json (Calidad y Seguridad)
        var clientId = _configuration["Blizzard:ClientId"];
        var clientSecret = _configuration["Blizzard:ClientSecret"];

        var authHeader = Convert.ToBase64String(Encoding.UTF8.GetBytes($"{clientId}:{clientSecret}"));
        
        var request = new HttpRequestMessage(HttpMethod.Post, "https://oauth.battle.net/token");
        request.Headers.Authorization = new AuthenticationHeaderValue("Basic", authHeader);
        
        var content = new FormUrlEncodedContent(new[]
        {
            new KeyValuePair<string, string>("grant_type", "client_credentials")
        });
        request.Content = content;

        // ASYNC: No bloqueamos el servidor mientras Blizzard responde
        var response = await _httpClient.SendAsync(request);
        response.EnsureSuccessStatusCode();

        var jsonString = await response.Content.ReadAsStringAsync();
        
        // Deserializamos con tipo seguro en vez de dynamic
        var tokenData = JsonConvert.DeserializeObject<BlizzardTokenResponse>(jsonString);
        return tokenData?.AccessToken ?? throw new InvalidOperationException("No se recibió access_token de Blizzard.");
    }
}