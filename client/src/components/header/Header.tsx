import {
  HeaderContainer,
  LogoImage,
  IconContainer,
  TableNumberContainer,
} from "./Header.style";
import Delice from "../../assets/Delice.svg";
import ShoppingIcon from "../cart/ShoppingIcon";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const { tableNumber } = useParams<{ tableNumber: string }>();
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <LogoImage
          src={Delice}
          alt="Delice-logo"
          onClick={() => navigate(`/${tableNumber}/menu`)}
        />
        <IconContainer>
          <TableNumberContainer>Table {tableNumber}</TableNumberContainer>
          <ShoppingIcon />
        </IconContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
}
