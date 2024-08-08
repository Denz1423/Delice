import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearCart } from "../../services/state/CartSlice";
import { clearTableNumber } from "../../services/state/HeaderSlice";
import { useNavigate } from "react-router-dom";
import { CheckoutButton } from "../../components/button/Button.style";
import agent from "../../services/api/agent";

export default function CheckoutSucess() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);
  const tableNumber = useAppSelector((state) => state.tableNumber);
  const [orderId, setOrderId] = useState("");

  const createOrder = useCallback(async () => {
    try {
      const { orderId } = await agent.Orders.create({
        ...cart.cart,
        tableNumber,
      });
      setOrderId(orderId);
      dispatch(clearCart());
      dispatch(clearTableNumber());
    } catch (err) {
      console.log(err);
    }
  }, [cart.cart, tableNumber, dispatch]);

  useEffect(() => {
    createOrder();
  }, [createOrder]);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Payment Successful!</h1>
      <p>
        Thank you for your purchase. Your order #{orderId} has been processed
        successfully. 
      </p>
      <CheckoutButton onClick={handleHomeClick} className="home-button-back">
        Return to Home
      </CheckoutButton>
    </div>
  );
}
