import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  position: relative;
`;

export const TableInput = styled.input`
  /* Remove the spinner for number inputs */
  -moz-appearance: textfield; /* Firefox */

  /* WebKit/Blink browsers */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border: none;
  border-bottom: 1px solid #515151;
  background: white;

  &:focus {
    outline: none;
  }
`;

export const TableLabel = styled.label`
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;

  .input:focus ~ label,
  .input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #5264ae;
  }
`;

export const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;

  .input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: #5264ae;
    }

    to {
      width: 0;
      background: transparent;
    }
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
    background: #5264ae;
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

  .input:focus ~ &:before,
  .input:focus ~ &:after {
    width: 50%;
  }
`;
