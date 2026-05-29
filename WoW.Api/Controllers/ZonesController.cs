using Microsoft.AspNetCore.Mvc;
using WoW.Application.Interfaces;

namespace WoW.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ZonesController : ControllerBase
{
    private readonly IWoWZoneService _zoneService;

    public ZonesController(IWoWZoneService zoneService)
    {
        _zoneService = zoneService;
    }

    /// <summary>
    /// Devuelve la URL de la imagen oficial de una zona WoW desde la API de Blizzard.
    /// GET /api/zones/{id}/media
    /// </summary>
    [HttpGet("{id}/media")]
    public async Task<IActionResult> GetZoneMedia(int id)
    {
        if (id <= 0) return BadRequest("ID de zona inválido.");

        var imageUrl = await _zoneService.GetZoneImageUrlAsync(id);
        if (imageUrl == null)
            return NotFound(new { error = "Imagen no disponible para esta zona." });

        return Ok(new { imageUrl });
    }
}
