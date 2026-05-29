using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

using WoW.Application.Interfaces;
using WoW.Infrastructure.Services;
using WoW.Infrastructure.Persistence;

var builder = WebApplication.CreateBuilder(args);

// --- 1. CONFIGURACIÓN DE BASE DE DATOS ---
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

// --- 2. INYECCIÓN DE DEPENDENCIAS ---
builder.Services.AddScoped<IUserFavoriteService, UserFavoriteService>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddHttpClient<IBlizzardAuthService, BlizzardAuthService>();
builder.Services.AddHttpClient<IWoWItemService, WoWItemService>();
builder.Services.AddHttpClient<IWoWZoneService, WoWZoneService>();

builder.Services.AddControllers();

// --- CORS: permite que el frontend (mismo origen o file://) llame a la API ---
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// --- 3. CONFIGURACIÓN DE SEGURIDAD (JWT) ---
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
        };
    });

// --- 4. CONFIGURACIÓN DE SWAGGER ---
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "WoW Pro API", Version = "v1" });

    // Definición del candado visual
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "Autorización JWT. Escribe 'Bearer' [espacio] y luego tu token en la caja de texto. Ejemplo: 'Bearer eyJhbGci...'",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });
    
   c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "WoW Pro API v1");
    });
}
else
{
    app.UseHttpsRedirection();
}

app.UseCors("FrontendPolicy");

// Sirve index.html al acceder a la raíz (localhost:5001)
app.UseDefaultFiles();
app.UseStaticFiles(new StaticFileOptions {
    ContentTypeProvider = new Microsoft.AspNetCore.StaticFiles.FileExtensionContentTypeProvider(
        new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) {
            { ".webp", "image/webp" },
            { ".avif", "image/avif" },
            { ".jpg",  "image/jpeg" },
            { ".jpeg", "image/jpeg" },
            { ".png",  "image/png" },
            { ".gif",  "image/gif" },
            { ".svg",  "image/svg+xml" },
            { ".css",  "text/css" },
            { ".js",   "application/javascript" },
            { ".html", "text/html" },
            { ".json", "application/json" },
        }
    )
});

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();