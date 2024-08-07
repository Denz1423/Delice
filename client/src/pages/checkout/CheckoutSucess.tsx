import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { clearCart } from "../../services/state/CartSlice";

export default function CheckoutSucess() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return <div>Payment Success!</div>;
}
