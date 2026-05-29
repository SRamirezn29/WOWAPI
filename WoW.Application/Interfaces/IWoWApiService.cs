using WoW.Application.DTOs;

namespace WoW.Application.Interfaces;

public interface IWoWApiService
{
    Task<IEnumerable<WoWItemDto>> SearchItemsAsync(string name);
}   