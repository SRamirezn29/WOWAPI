using WoW.Domain.Entities;

namespace WoW.Application.Interfaces;

public interface IUserFavoriteService
{
    Task<bool> AddFavoriteAsync(int userId, int itemId, string itemName);
    Task<List<UserFavorite>> GetUserFavoritesAsync(int userId);
    Task<bool> DeleteFavoriteAsync(int userId, int favoriteId);
}