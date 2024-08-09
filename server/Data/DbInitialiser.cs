using server.Entities;

namespace server.Data
{
    public static class Dbinitializer
    {
        public static void Initialise(StoreContext context)
        {
            if (context.Products.Any())
                return;

            var products = new List<Product>
            {
                new()
                {
                    Name = "Tiramisu",
                    Price = 12.00,
                    ImageUrl = "Tiramisu.png",
                    Type = "Cake",
                },
                new()
                {
                    Name = "ChocolateCake",
                    Price = 10.00,
                    ImageUrl = "ChocolateCake.png",
                    Type = "Cake",
                },
                new()
                {
                    Name = "GreenTeaCake",
                    Price = 11.00,
                    ImageUrl = "GreenTeaCake.png",
                    Type = "Cake",
                },
                new()
                {
                    Name = "OreoCake",
                    Price = 12.00,
                    ImageUrl = "OreoCake.png",
                    Type = "Cake",
                },
                new()
                {
                    Name = "RedVelvetCake",
                    Price = 13.00,
                    ImageUrl = "RedVelvetCake.png",
                    Type = "Cake",
                },
                new()
                {
                    Name = "CarrotCake",
                    Price = 11.00,
                    ImageUrl = "CarrotCake.png",
                    Type = "Cake",
                },
                new()
                {
                    Name = "Macaroon",
                    Price = 13.00,
                    ImageUrl = "Macaroon.png",
                    Type = "Cake",
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}
