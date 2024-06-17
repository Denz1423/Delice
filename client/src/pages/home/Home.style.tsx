import styled from "styled-components";

export const TableInput = styled.input`
  /* Remove the spinner for number inputs */
  -moz-appearance: textfield; /* Firefox */

  /* WebKit/Blink browsers */ 
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
