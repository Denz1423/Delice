import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useMemo } from "react";
import agent from "../../api/agent";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setCart } from "../cart/CartSlice";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const tableNumber = useAppSelector((state) => state.tableNumber);
  const clientSecret = useAppSelector((state) => state.cart.cart?.clientSecret);

  const payload = useMemo(() => {
    return { ...cart.cart, tableNumber };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableNumber]);

  useEffect(() => {
    agent.Payments.createPaymentIntent(payload)
      .then((response) => dispatch(setCart(response)))
      .catch((err) => console.log(err));
  }, [dispatch, payload]);

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
