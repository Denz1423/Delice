import { HeaderContainer, LogoContainer, LogoImage } from "./Header.style";
import  Delice from "../../assets/Delice.svg";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <LogoImage src={Delice} alt="Delice-logo" />
        </LogoContainer>
      </HeaderContainer>
    </>
  );
}
