import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/header/Header";
import { GridContainer, MenuContainer } from "./Menu.style";
import { Product } from "../../models/Product";
import agent from "../../api/agent";

export default function Menu() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Products.getAll()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <MenuContainer>
      <Header />
      <GridContainer>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </GridContainer>
    </MenuContainer>
  );
}
