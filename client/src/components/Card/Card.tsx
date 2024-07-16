import { Product } from "../../models/Product";
import { ProductCardButton } from "../button/Button.style";
import {
  CardContainer,
  CardFooter,
  CardImageContainer,
  CardName,
} from "./Card.style";

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <CardContainer>
      <CardImageContainer src={product.pictureUrl} alt={product.name} />
      <CardName>{product.name}</CardName>
      <CardFooter>
        ${product.price}
        <ProductCardButton>Add to cart</ProductCardButton>
      </CardFooter>
    </CardContainer>
  );
}
