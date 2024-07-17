import Card from "../../components/Card/Card";
import Header from "../../components/header/Header";
import { GridContainer, MenuContainer } from "./Menu.style";

const dummyProducts = [
  {
    id: 1,
    name: "Tiramisu",
    price: 12,
    type: "Cake",
    pictureUrl: "/images/products/Tiramisu.png",
  },
  {
    id: 2,
    name: "ChocolateCake",
    price: 13,
    type: "Cake",
    pictureUrl: "/images/products/ChocolateCake.png",
  },
];

const aProduct = {
  id: 1,
  name: "Tiramisu",
  price: 12,
  type: "Cake",
  pictureUrl: "/images/products/Tiramisu.png",
};

export default function Menu() {
  return (
    <MenuContainer>
      <Header />
      <GridContainer>
        {/* {dummyProducts.map((product) => {
          return <Card key={product.id} product={product} />;
        })} */}
        <Card product={aProduct} />
        <Card product={aProduct} />
        <Card product={aProduct} />
        <Card product={aProduct} />
        <Card product={aProduct} />
        <Card product={aProduct} />
      </GridContainer>
    </MenuContainer>
  );
}
