using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Entities;
using server.Entities.Order;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly StoreContext _context;

        public OrdersController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetAllOrders()
        {
            return await _context.Orders.Include(order => order.OrderItems).ToListAsync();
        }

        [HttpGet("{tableNumber}")]
        public async Task<ActionResult<List<Order>>> GetOrder(int tableNumber)
        {
            return await _context
                .Orders.Where(order => order.TableNumber == tableNumber)
                .Include(order => order.OrderItems)
                .ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(Cart cart)
        {
            if (cart == null)
                return BadRequest(
                    new ProblemDetails
                    {
                        Title = "Invalid Cart",
                        Detail =
                            "The cart is empty. Please add items to the cart before creating an order."
                    }
                );

            var products = new List<OrderItem>();

            foreach (var product in cart.Products)
            {
                var productItem = await _context.Products.FindAsync(product.Id);
                var orderItem = new OrderItem
                {
                    ProductId = productItem.Id,
                    Name = productItem.Name,
                    Price = productItem.Price,
                    Quantity = product.Quantity,
                };
                products.Add(orderItem);
            }

            var total = products.Sum(product => product.Price * product.Quantity);

            var order = new Order
            {
                OrderItems = products,
                SubTotal = total,
                TableNumber = cart.TableNumber
            };

            _context.Orders.Add(order);

            var result = await _context.SaveChangesAsync() > 0;

            if (result)
                return Ok(new { OrderId = order.Id });
            return StatusCode(500, "Problem creating order");
        }
    }
}
