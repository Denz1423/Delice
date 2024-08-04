namespace server.DTOs
{
    public class CartDto
    {
        public int TableNumber { get; set; }
        public List<CartProductDto> Products { get; set; }
        public string PaymentIntentId { get; set; }
        public string ClientSecret { get; set; }
    }
}
