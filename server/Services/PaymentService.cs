using server.Entities;
using Stripe;

namespace server.Services
{
    public class PaymentService
    {
        private readonly IConfiguration _config;

        public PaymentService(IConfiguration config)
        {
            _config = config;
        }

        public async Task<PaymentIntent> CreateOrUpdatePaymentIntent(Cart cart)
        {
            StripeConfiguration.ApiKey = _config["StripeSettings:SecretKey"];

            var paymentIntentService = new PaymentIntentService();

            var paymentIntent = new PaymentIntent();
            var subtotal = cart.Items.Sum(item => item.Price * item.Quantity);

            if (string.IsNullOrEmpty(cart.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = (long)subtotal,
                    Currency = "nzd",
                };
                paymentIntent = await paymentIntentService.CreateAsync(options);
                cart.PaymentIntentId = paymentIntent.Id;
                cart.ClientSecret = cart.ClientSecret;
            }
            else
            {
                var options = new PaymentIntentUpdateOptions { Amount = (long)subtotal, };
                await paymentIntentService.UpdateAsync(cart.PaymentIntentId, options);
            }
            return paymentIntent;
        }
    }
}
