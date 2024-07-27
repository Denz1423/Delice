import { useEffect } from "react";
import Card from "../../components/Card/Card";

import { GridContainer, MenuContainer } from "./Menu.style";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProductsAsync, productSelectors } from "./MenuSlice";

export default function Menu() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded } = useAppSelector((state) => state.menu);

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [dispatch, productsLoaded]);

  return (
    <MenuContainer>
      <GridContainer>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </GridContainer>
    </MenuContainer>
  );
}
