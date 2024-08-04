namespace server.DTOs
{
    public class CartProductDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string PictureUrl { get; set; }
        public string Type { get; set; }
        public int Quantity { get; set; }
    }
}
