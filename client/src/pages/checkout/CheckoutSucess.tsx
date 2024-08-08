import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { clearCart } from "../../services/state/CartSlice";
import { clearTableNumber } from "../../services/state/HeaderSlice";
import { useNavigate } from "react-router-dom";
import { CheckoutButton } from "../../components/button/Button.style";

export default function CheckoutSucess() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearCart());
    dispatch(clearTableNumber());
  }, [dispatch]);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Payment Successful!</h1>
      <p>
        Thank you for your purchase. Your order has been processed successfully.
      </p>
      <CheckoutButton onClick={handleHomeClick} className="home-button-back">
        Return to Home
      </CheckoutButton>
    </div>
  );
}
