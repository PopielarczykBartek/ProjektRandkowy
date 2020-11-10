using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjektRandkowy.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage="Nazwa uzytkownika jest wymagana")]
        public string Username { get; set; }
        [Required(ErrorMessage="Haslo jest wymagane")]
        [StringLength(12,MinimumLength=6,ErrorMessage ="Haslo musi sie skladac od 6 do 12 znakow")]
        public string Password { get; set; }

    }
}
