import { useCallback, useState } from "react";
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
import { HomeButton } from "../../components/button/Button.style";

export default function Home() {
  const [tableNumber, setTableNumber] = useState<number | undefined>(undefined);

  const handleTableNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTableNumber(parseInt(e.target.value, 10));
    },
    []
  );

  return (
    <>
      <HomeContainer>
        <FormContainer>
          <img src={DeliceLogo} alt="DeliceLogo"></img>
          <br />
          <FormInputContainer>
            <TableInput
              required
              type="number"
              value={tableNumber}
              onChange={handleTableNumberChange}
            />
            <Highlight />
            <Bar />
            <TableLabel>Table Number</TableLabel>
          </FormInputContainer>
          <HomeButton>Next</HomeButton>
        </FormContainer>
      </HomeContainer>
    </>
  );
}
