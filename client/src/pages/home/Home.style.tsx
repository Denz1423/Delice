import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #86796e;
  padding: 30px 30px;
  border-radius: 20px;

`;

export const FormInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 50px 20px;
`;

export const TableInput = styled.input`
  /* Remove the spinner for number inputs */
  appearance: textfield;
  -moz-appearance: textfield; /* Firefox */

  /* WebKit/Blink browsers */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  font-size: 16px;
  color: #f8f3ed;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 250px;
  border: none;
  background: transparent;
  text-align: center;

  &:focus {
    outline: none;
    text-align: center;
  }
`;

export const TableLabel = styled.label`
  color: white;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  position: absolute;
  pointer-events: none;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;

  ${TableInput}:focus ~ &,
  ${TableInput}:valid ~ & {
    top: -20px;
    font-size: 14px;
    color: #f8f3ed;
  }
`;

const inputHighlighter = keyframes`
  from {
    background: #F8F3ED;
  }
  to {
    width: 0;
    background: transparent;
  }
`;

export const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  /* left: 60; */
  pointer-events: none;
  opacity: 0.5;

  ${TableInput}:focus ~ & {
    animation: ${inputHighlighter} 0.5s ease;
  }
`;

export const Bar = styled.span`
  position: relative;
  display: block;
  width: 200px;

  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #f8f3ed;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  ${TableInput}:focus ~ &:before,
  ${TableInput}:focus ~ &:after {
    width: 50%;
  }
`;