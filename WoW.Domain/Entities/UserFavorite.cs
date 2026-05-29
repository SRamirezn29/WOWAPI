namespace WoW.Domain.Entities;

public class UserFavorite
{
    public int Id { get; set; }
    public int UserId { get; set; } 
    public int ItemId { get; set; } 
    public string ItemName { get; set; } = string.Empty; 
    public DateTime SavedAt { get; set; } = DateTime.UtcNow;
}