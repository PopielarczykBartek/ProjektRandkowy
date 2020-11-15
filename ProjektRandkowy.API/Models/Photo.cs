using System;

namespace ProjektRandkowy.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; } // Opis
        public DateTime DateAdded { get; set; } // Data dodania
        public bool IsMain { get; set; }        // Czy zdjecie jest główne
        public string public_id { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}