using System;
using System.Collections.Generic;
using DatingApp.API.Model;

namespace DatingApp.API.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string userName { get; set; }
        public string Gender { get; set; }
        public string KnownAs { get; set; }
        public string Introduction { get; set; } 
        public string LookingFor { get; set; } 
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int Age { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string PhotoUrl { get; set; }
        public ICollection<PhotoForDetailedDto> Photos { get; set; } 
    }
}