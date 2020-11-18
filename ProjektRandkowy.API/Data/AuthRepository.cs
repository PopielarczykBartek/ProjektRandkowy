﻿using Microsoft.EntityFrameworkCore;
using ProjektRandkowy.API.Data;
using ProjektRandkowy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjektRandkowy.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;
        }

        #region method public
        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync(x => x.Username == username);
            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;

        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
        

            CreatePasswordHashSalt(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;


            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<bool> UserExist(string username) //czy user istnieje
        {
            if (await _context.Users.AnyAsync(x => x.Username == username))
                return true;

            return false;
        }
        #endregion

        #region private method
        private void CreatePasswordHashSalt(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmca = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmca.Key;
                passwordHash = hmca.ComputeHash(Encoding.UTF8.GetBytes(password)); 
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmca = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computtedHash = hmca.ComputeHash(Encoding.UTF8.GetBytes(password));

                for (int i = 0; i < computtedHash.Length; i++)
                {
                    if (computtedHash[i] != passwordHash[i])
                        return false;
                }
                return true;
            }
        }
        #endregion
    }
}
