import styled from "styled-components";

export const HomeButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #423124;
  border-radius: 15px;
  box-sizing: border-box;
  color: #f8f3ed;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 50%;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #f8f3ed;
    background-color: #423124;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const ProductCardButton = styled.button`
  background-color: #423124;
  width: 100px;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0;
  margin: 10px 0px;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #f8f3ed;
  }
`;
