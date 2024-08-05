import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { StripeContainer } from "./CheckoutForm.style";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: "accordion",
      defaultCollapsed: false,
      radios: true,
      spacedAccordionItems: false,
    },
  };

  return (
    <>
      <form>
        <StripeContainer>
          <PaymentElement options={paymentElementOptions} />
          <button>Pay now</button>
        </StripeContainer>
      </form>
    </>
  );
}
