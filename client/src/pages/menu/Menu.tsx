import Card from "../../components/Card/Card";
import Header from "../../components/header/Header";
import { MenuContainer } from "./Menu.style";

const dummyProduct = {
  id: 1,
  name: "Tiramisu",
  price: 12,
  type: "Cake",
  pictureUrl: "/images/products/Tiramisu.png",
};

export default function Menu() {
  return (
    <MenuContainer>
      <Header></Header>
      <Card product={dummyProduct} />
    </MenuContainer>
  );
}
