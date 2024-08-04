using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.DTOs;
using server.Entities;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PaymentController : ControllerBase
    {
        private readonly PaymentService _paymentService;
        private readonly StoreContext _context;

        public PaymentController(PaymentService paymentService, StoreContext context)
        {
            _paymentService = paymentService;
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<CartDto>> CreateOrUpdatePaymentIntent(Cart cart)
        {
            if (cart == null)
                return NoContent();

            var intent = await _paymentService.CreateOrUpdatePaymentIntent(cart);

            if (intent == null)
                return BadRequest(new ProblemDetails { Title = "Problem creating payment intent" });

            cart.PaymentIntentId ??= intent.Id;
            cart.ClientSecret ??= intent.ClientSecret;

            return new CartDto
            {
                TableNumber = cart.TableNumber,
                PaymentIntentId = cart.PaymentIntentId,
                ClientSecret = cart.ClientSecret,
                Products = cart
                    .Items.Select(item => new CartProductDto
                    {
                        ProductId = item.Id,
                        Name = item.Name,
                        Price = item.Price,
                        PictureUrl = item.PictureUrl,
                        Type = item.Type,
                        Quantity = item.Quantity
                    })
                    .ToList()
            };
        }
    }
}
