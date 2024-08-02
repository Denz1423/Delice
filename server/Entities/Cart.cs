namespace server.Entities
{
    public class Cart
    {
        public List<CartProduct> Items { get; set; }
        public string PaymentIntentId { get; set; }
        public string ClientSecret { get; set; }
    }
}
