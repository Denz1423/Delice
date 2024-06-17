import { TableInput } from "./Home.style";

export default function Home() {
  return (
    <>
      <h2>Enter table number:</h2>
      <form>
        <TableInput type="number" name="tableNumber" min="0" />
      </form>
    </>
  );
}
