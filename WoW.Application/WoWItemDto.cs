namespace WoW.Application.DTOs;

public class WoWItemDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Rarity { get; set; } = string.Empty;
    public string IconUrl { get; set; } = string.Empty;
}