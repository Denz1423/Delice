import {
  FormContainer,
  FormInputContainer,
  HomeContainer,
  TableInput,
  TableLabel,
  Highlight,
  Bar,
} from "./Home.style";
import DeliceLogo from "/Delice-circle.png";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <FormContainer>
          <img src={DeliceLogo} alt="DeliceLogo"></img>
          <br />
          <FormInputContainer>
            <TableInput type="number" min="0" />
            <Highlight />
            <Bar />
            <TableLabel>Table Number</TableLabel>
          </FormInputContainer>
        </FormContainer>
      </HomeContainer>
    </>
  );
}
