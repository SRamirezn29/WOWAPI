namespace WoW.Application.Interfaces;

public interface IWoWZoneService
{
    Task<string?> GetZoneImageUrlAsync(int zoneId);
}
