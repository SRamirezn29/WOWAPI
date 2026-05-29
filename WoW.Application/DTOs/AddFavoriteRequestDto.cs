using System.ComponentModel.DataAnnotations;

namespace WoW.Application.DTOs;

public class AddFavoriteRequestDto
{
    [Required(ErrorMessage = "El ItemId es obligatorio.")]
    [Range(1, int.MaxValue, ErrorMessage = "El ItemId debe ser un número positivo.")]
    public int ItemId { get; set; }

    [Required(ErrorMessage = "El nombre del item es obligatorio.")]
    [MinLength(1, ErrorMessage = "El nombre del item no puede estar vacío.")]
    [MaxLength(200, ErrorMessage = "El nombre del item no puede superar 200 caracteres.")]
    public string ItemName { get; set; } = string.Empty;
}