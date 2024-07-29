import { useAppSelector } from "../../store/hooks";
import { ProductContainer, SummaryImageContainer } from "./Summary.style";

export default function Summary() {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <>
      <center>
        <h2>Cart Summary</h2>
      </center>
      {cart?.products.map((product) => {
        return (
          <ProductContainer>
            <SummaryImageContainer>
              <img src={product.imageUrl} alt={product.name} />
            </SummaryImageContainer>

            <span>{product.name}</span>
            <span>${product.price * product.quantity}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
              height={30}
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>

            <span>{product.quantity}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
              height={30}
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                clipRule="evenodd"
              />
            </svg>
          </ProductContainer>
        );
      })}
    </>
  );
}