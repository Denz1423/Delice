import {
  HeaderContainer,
  LogoImage,
  IconContainer,
  TableNumberContainer,
} from "./Header.style";
import Delice from "../../assets/Delice.svg";
import ShoppingIcon from "../cart/ShoppingIcon";
import { useParams } from "react-router-dom";

export default function Header() {
  const { tableNumber } = useParams<{ tableNumber: string }>();

  return (
    <HeaderContainer>
      <LogoImage src={Delice} alt="Delice-logo" />
      <IconContainer>
        <TableNumberContainer>Table {tableNumber}</TableNumberContainer>
        <ShoppingIcon />
      </IconContainer>
    </HeaderContainer>
  );
}
