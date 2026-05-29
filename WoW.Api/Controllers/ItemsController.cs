using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims; 
using WoW.Application.DTOs;
using WoW.Application.Interfaces;

namespace WoW.Api.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ItemsController : ControllerBase
{
    private readonly IWoWItemService _itemService;
    private readonly IUserFavoriteService _favoriteService; 

    public ItemsController(IWoWItemService itemService, IUserFavoriteService favoriteService)
    {
        _itemService = itemService;
        _favoriteService = favoriteService;
    }

    [HttpGet("search/{name}")]
    public async Task<IActionResult> Search(string name)
    {
        var result = await _itemService.GetItemByNameAsync(name);
        if (result == null) return NotFound(new { message = "Item no encontrado en Blizzard" });
        
        return Ok(result);
    }

[HttpPost("favorite")]
    public async Task<IActionResult> AddFavorite([FromBody] AddFavoriteRequestDto request)
    {
        var userIdString = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userIdString)) return Unauthorized();

        int userId = int.Parse(userIdString);

        var success = await _favoriteService.AddFavoriteAsync(userId, request.ItemId, request.ItemName);
        if (!success) return BadRequest(new { message = "El arma ya está en tu inventario." });

        return Ok(new { message = "¡Arma guardada en tu inventario con éxito!" });
    }

    [HttpGet("favorites")]
    public async Task<IActionResult> GetMyFavorites()
    {
        var userIdString = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userIdString)) return Unauthorized();

        int userId = int.Parse(userIdString);

        var favorites = await _favoriteService.GetUserFavoritesAsync(userId);
        return Ok(favorites);
    }

    [HttpDelete("favorite/{id}")]
    public async Task<IActionResult> DeleteFavorite(int id)
    {
        var userIdString = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userIdString)) return Unauthorized();

        int userId = int.Parse(userIdString);

        var success = await _favoriteService.DeleteFavoriteAsync(userId, id);
        if (!success) return NotFound(new { message = "El favorito no existe o no te pertenece." });

        return Ok(new { message = "Favorito eliminado correctamente." });
    }
}