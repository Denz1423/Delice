using System.ComponentModel.DataAnnotations;

namespace server.Entities.Order
{
    public class Order
    {
        public int Id { get; set; }

        [Required]
        public int TableNumber { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;
        public List<OrderItem> OrderItems { get; set; }
        public double SubTotal { get; set; }
        public OrderStatus OrderStatus { get; set; } = OrderStatus.Pending;
        public PaymentStatus PaymentStatus { get; set; } = PaymentStatus.Pending;
        public string PaymentIntentId { get; set; }
    }
}
