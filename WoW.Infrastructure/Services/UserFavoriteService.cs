using Microsoft.EntityFrameworkCore;
using WoW.Application.Interfaces;
using WoW.Domain.Entities;
using WoW.Infrastructure.Persistence;

namespace WoW.Infrastructure.Services;

public class UserFavoriteService : IUserFavoriteService
{
    private readonly ApplicationDbContext _context;

    public UserFavoriteService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<bool> AddFavoriteAsync(int userId, int itemId, string itemName)
    {
        var exists = await _context.UserFavorites
            .AnyAsync(f => f.UserId == userId && f.ItemId == itemId);
        
        if (exists) return false;
        var favorite = new UserFavorite
        {
            UserId = userId,
            ItemId = itemId,
            ItemName = itemName
        };
        _context.UserFavorites.Add(favorite);
        await _context.SaveChangesAsync();
        
        return true;
    }

    public async Task<List<UserFavorite>> GetUserFavoritesAsync(int userId)
    {
        return await _context.UserFavorites
            .Where(f => f.UserId == userId)
            .OrderByDescending(f => f.SavedAt)
            .ToListAsync();
    }

    public async Task<bool> DeleteFavoriteAsync(int userId, int favoriteId)
    {
        var favorite = await _context.UserFavorites
            .FirstOrDefaultAsync(f => f.Id == favoriteId && f.UserId == userId);

        if (favorite == null) return false;

        _context.UserFavorites.Remove(favorite);
        await _context.SaveChangesAsync();
        return true;
    }
}