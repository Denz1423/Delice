import { Product } from "../../models/Product";
import { useAppDispatch } from "../../store/hooks";
import { ProductCardButton } from "../button/Button.style";
import { addProductToCart } from "../../services/state/CartSlice";
import {
  CardContainer,
  CardFooter,
  CardImage,
  CardInformation,
  CardName,
  CardPrice,
} from "./Card.style";

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  const dispatch = useAppDispatch();

  return (
    <CardContainer>
      <CardImage src={product.imageUrl} alt={product.name} />
      <CardInformation>
        <CardName>{product.name}</CardName>
        <CardPrice>${product.price}</CardPrice>
      </CardInformation>
      <CardFooter>
        <ProductCardButton
          onClick={() => dispatch(addProductToCart({ product }))}
        >
          Add item
        </ProductCardButton>
      </CardFooter>
    </CardContainer>
  );
}
