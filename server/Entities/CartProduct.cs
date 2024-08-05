namespace server.Entities
{
    public class CartProduct
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string ImageUrl { get; set; }
        public string Type { get; set; }
        public int Quantity { get; set; }
    }
}