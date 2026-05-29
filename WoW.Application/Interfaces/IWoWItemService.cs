using WoW.Application.DTOs;

namespace WoW.Application.Interfaces;

public interface IWoWItemService
{
    Task<ItemResponseDto?> GetItemByNameAsync(string itemName);
}