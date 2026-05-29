using System.Collections.Concurrent;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;
using WoW.Application.Interfaces;

namespace WoW.Infrastructure.Services;

public class WoWZoneService : IWoWZoneService
{
    private readonly HttpClient _httpClient;
    private readonly IBlizzardAuthService _authService;

    // Cache estático: evita llamar a Blizzard repetidamente por la misma zona
    private static readonly ConcurrentDictionary<int, string> _cache = new();

    public WoWZoneService(HttpClient httpClient, IBlizzardAuthService authService)
    {
        _httpClient = httpClient;
        _authService = authService;
    }

    public async Task<string?> GetZoneImageUrlAsync(int zoneId)
    {
        // Devuelve desde caché si ya lo obtuvimos antes
        if (_cache.TryGetValue(zoneId, out var cached))
            return cached;

        var token = await _authService.GetAccessTokenAsync();

        using var request = new HttpRequestMessage(
            HttpMethod.Get,
            $"https://us.api.blizzard.com/data/wow/media/zone/{zoneId}?namespace=static-us&locale=es_MX");
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

        var response = await _httpClient.SendAsync(request);
        if (!response.IsSuccessStatusCode) return null;

        var content = await response.Content.ReadAsStringAsync();
        var json = JObject.Parse(content);

        // La API devuelve: { "assets": [{ "key": "asset", "value": "https://..." }] }
        var imageUrl = json["assets"]?[0]?["value"]?.ToString();

        if (!string.IsNullOrEmpty(imageUrl))
            _cache[zoneId] = imageUrl;

        return imageUrl;
    }
}
