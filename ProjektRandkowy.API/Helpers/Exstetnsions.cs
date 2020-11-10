using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjektRandkowy.Helpers
{
    public static class Exstetnsions
    {
        public static int CalculateAge(this DateTime datetime)
        {
            var age = DateTime.Today.Year - datetime.Year;
            if (datetime.AddYears(age)>DateTime.Today)
            {
                age--;
            }
            return age;
        }
    }
}
