using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System.Net.Http.Headers;
using WoW.Application.DTOs;
using WoW.Application.Interfaces;
using WoW.Domain.Entities;
using WoW.Infrastructure.Persistence;

namespace WoW.Infrastructure.Services;

public class WoWItemService : IWoWItemService
{
    private readonly ApplicationDbContext _context;
    private readonly HttpClient _httpClient;
    private readonly IBlizzardAuthService _authService;

    public WoWItemService(ApplicationDbContext context, HttpClient httpClient, IBlizzardAuthService authService)
    {
        _context = context;
        _httpClient = httpClient;
        _authService = authService;
    }

    public async Task<ItemResponseDto?> GetItemByNameAsync(string itemName)
    {
        // 1. Intentar buscar en nuestra base de datos local (SQL Server)
        var localItem = await _context.WoWItems
            .FirstOrDefaultAsync(i => i.Name.Contains(itemName));

        if (localItem != null)
        {
            return new ItemResponseDto
            {
                Id = localItem.Id,
                Name = localItem.Name,
                Rarity = localItem.Rarity ?? "Unknown",
                Type = localItem.Type ?? "Unknown",
                IconUrl = localItem.IconUrl ?? ""
            };
        }

        // 2. Si no existe localmente, pedir Token y buscar en Blizzard
        var token = await _authService.GetAccessTokenAsync();
        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

        // Endpoint de búsqueda de Blizzard (usamos el namespace 'static-us')
        var searchUrl = $"https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&name.en_US={itemName}&orderby=id";
        
        var response = await _httpClient.GetAsync(searchUrl);
        if (!response.IsSuccessStatusCode) return null;

        var content = await response.Content.ReadAsStringAsync();
        var json = JObject.Parse(content);
        
        // Extraer el primer resultado
        var firstResult = json["results"]?[0]?["data"];
        if (firstResult == null) return null;

        // 3. Mapear los datos de Blizzard a nuestra Entidad
        var newItem = new WoWItem
        {
            Id = (int)firstResult["id"]!,
            Name = (string)firstResult["name"]?["en_US"]!,
            Rarity = (string)firstResult["quality"]?["type"]!,
            Type = (string)firstResult["item_class"]?["name"]?["en_US"]!,
            CachedAt = DateTime.UtcNow
        };

        // 4. Guardar en SQL Server para la próxima vez (Caché)
        _context.WoWItems.Add(newItem);
        await _context.SaveChangesAsync();

        return new ItemResponseDto
        {
            Id = newItem.Id,
            Name = newItem.Name,
            Rarity = newItem.Rarity,
            Type = newItem.Type,
            IconUrl = newItem.IconUrl ?? ""
        };
    }
}