import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { StripeContainer } from "./CheckoutForm.style";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const tableNumber = useAppSelector((state) => state.tableNumber);
  const clientSecret = useAppSelector((state) => state.cart.cart?.clientSecret);
  const [message, setMessage] = useState<string | undefined>("");

  // useEffect(() => {
  //   if (!stripe || !clientSecret) {
  //     return;
  //   }
  
  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent!.status) {
  //       case "succeeded":
  //         setMessage("Payment succeeded!");
  //         break;
  //       case "processing":
  //         setMessage("Your payment is processing.");
  //         break;
  //       case "requires_payment_method":
  //         setMessage("Your payment was not successful, please try again.");
  //         break;
  //       default:
  //         setMessage("Something went wrong.");
  //         break;
  //     }
  //   });
  // }, [clientSecret, stripe]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePaymentSubmission = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:5173/${tableNumber}/success`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
  };

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
      <form onSubmit={handlePaymentSubmission}>
        {message && <div>{message}</div>}
        <StripeContainer>
          <PaymentElement options={paymentElementOptions} />
          <button>Pay now</button>
        </StripeContainer>
      </form>
    </>
  );
}
