using Microsoft.EntityFrameworkCore;
using server.Entities;
using server.Entities.Order;

namespace server.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
