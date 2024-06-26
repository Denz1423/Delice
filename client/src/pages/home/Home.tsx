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
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormInputs = {
  tableNumber: number;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = ({ tableNumber }) =>
    navigate("/menu/" + tableNumber);

  return (
    <>
      <HomeContainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <img src={DeliceLogo} alt="DeliceLogo"></img>
          <br />
          <FormInputContainer>
            <TableInput
              type="number"
              required
              {...register("tableNumber", {
                required: "Please enter your table number",
                min: {
                  value: 1,
                  message: "Table number does not exist (1-20 only)",
                },
                max: {
                  value: 20,
                  message: "Table number does not exist (1-20 only)",
                },
              })}
            />
            <Highlight />
            <Bar />
            <TableLabel>Table Number</TableLabel>
            {errors.tableNumber && <p>{errors.tableNumber?.message}</p>}
          </FormInputContainer>
          <HomeButton type="submit">Next</HomeButton>
        </FormContainer>
      </HomeContainer>
    </>
  );
}
