using ProjektRandkowy.Helpers;
using ProjektRandkowy.Models;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProjektRandkowy.Data
{
    public interface IUserRepository : IGenericRepository
    {
        Task<PagedList<User>> GetUsers(UserParams userParams);
        Task<User> GetUser(int id);
        Task<Photo> GetPhoto(int id);
        Task<Photo> GetMainPhotoForUser(int userId);
        Task<Like> GetLike(int userId, int recipientId); // recipient - odbiorca
        Task<Message> GetMessage(int userId);
        Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams);
        Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId);

    }
}
