namespace WoW.Domain.Entities;

public class WoWItem
{
    public int Id { get; set; } 
    
    public string Name { get; set; } = string.Empty;
    
    public string? Rarity { get; set; } 
    
    public string? Type { get; set; } 
    
    public int? Level { get; set; }
    
    public string? Description { get; set; }
    
    public string? IconUrl { get; set; }
    
    public DateTime CachedAt { get; set; } = DateTime.UtcNow;
}