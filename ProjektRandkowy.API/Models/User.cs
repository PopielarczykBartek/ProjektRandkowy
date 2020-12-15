using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjektRandkowy.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        // Podstawowe informacje:
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string ZodiacSign { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        // Dodatkowe informacje, zakladka info
        public string Growth { get; set; }
        public string EyeColor { get; set; }
        public string HairColore { get; set; }
        public string MartialStatus { get; set; } //stan cywilny
        public string Education { get; set; }
        public string Profession { get; set; }
        public string Children { get; set; }
        public string Languages { get; set; }


        // Zakladka "o mnie"
        public string Motto { get; set; }
        public string Description { get; set; }
        public string Personality { get; set; }
        public string LookingFor { get; set; }


        // Zakladka "Pasje i zainteresowania:
        public string Intrests { get; set; }
        public string FreeTime { get; set; }
        public string Sport { get; set; }
        public string Movies { get; set; }
        public string Music { get; set; }


        // Zakładka Preferencje
        public string ILike { get; set; }
        public string IDoNotLike { get; set; }
        public string MakesMeLaugh { get; set; }
        public string ItFeelsBestIn { get; set; }
        public string FriendsWouldDescribeMe { get; set; }


        // Zakladka zdjecia
        public ICollection<Photo> Photos { get; set; }
        public ICollection<Like> UserLikes { get; set; }            // uzytkownik lubi
        public ICollection<Like> UserIsLiked { get; set; }          // uzytkownik jest lubiany
        public ICollection<Message> MessagesSent { get; set; }      // wiadomosci wysłane
        public ICollection<Message> MessagesRecived { get; set; }   // wiadomosci odebrane


    }
}
