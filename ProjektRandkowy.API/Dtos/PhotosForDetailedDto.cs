using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjektRandkowy.Dtos
{
    public class PhotosForDetailedDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; } // Opis
        public DateTime DateAdded { get; set; } // Data dodania
        public bool IsMain { get; set; }        // Czy zdjecie jest główne
    }
}
