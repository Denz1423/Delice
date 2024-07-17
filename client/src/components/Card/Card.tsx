import { Product } from "../../models/Product";
import { ProductCardButton } from "../button/Button.style";
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
  return (
    <CardContainer>
      <CardImage src={product.pictureUrl} alt={product.name} />
      <CardInformation>
        <CardName>{product.name}</CardName>
        <CardPrice>${product.price}</CardPrice>
      </CardInformation>
      <CardFooter>
        <ProductCardButton>Add item</ProductCardButton>
      </CardFooter>
    </CardContainer>
  );
}
