import { HeaderContainer, LogoContainer, LogoImage } from "./Header.style";
import DeliceLogo from '../../assets/Delice-logo.png';

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <LogoImage src={DeliceLogo} alt="Delice-logo" />
        </LogoContainer>
      </HeaderContainer>
    </>
  );
}
