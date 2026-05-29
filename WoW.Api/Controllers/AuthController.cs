using Microsoft.AspNetCore.Mvc;
using WoW.Application.DTOs;
using WoW.Application.Interfaces;

namespace WoW.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IBlizzardAuthService _blizzardAuth; 
    private readonly IAuthService _userAuth;           
    private readonly ILogger<AuthController> _logger;

    public AuthController(
        IBlizzardAuthService blizzardAuth, 
        IAuthService userAuth, 
        ILogger<AuthController> logger)
    {
        _blizzardAuth = blizzardAuth;
        _userAuth = userAuth;
        _logger = logger;
    }

    // --- ENDPOINT EXISTENTE (Blizzard) ---
    [HttpGet("token")]
    public async Task<IActionResult> GetToken()
    {
        try {
            var token = await _blizzardAuth.GetAccessTokenAsync();
            return Ok(new { access_token = token });
        }
        catch (Exception ex) {
            _logger.LogError(ex, "Error al obtener token de Blizzard");
            return StatusCode(500, new { error = "Error de conexión externa" });
        }
    }

    // --- ENDPOINT (Registro de Usuarios) ---
    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequestDto request)
    {
        var result = await _userAuth.RegisterAsync(request);
        if (!result) return BadRequest(new { message = "El usuario ya existe o los datos son inválidos" });

        return Ok(new { message = "¡Usuario creado con éxito!" });
    }

    // --- NUEVO ENDPOINT (Inicio de Sesión) ---
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequestDto request)
    {
        var token = await _userAuth.LoginAsync(request.Email, request.Password);
        
        if (token == null) 
            return Unauthorized(new { message = "Credenciales incorrectas" });

        return Ok(new { token });
    }
}