import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  height: 200px;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    margin: 10px 10px;
  }
`;

export const SummaryImageContainer = styled.div`
  width: 200px;

  & img {
    height: 150px;
    width: 150px;
  }

  & svg {
    cursor: pointer;
  }
`;

export const SummaryProductInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  /* justify-content: space-around; */
  align-items: center;

  & span{
    margin: 10px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    font-size: large;
    margin: 10px;
  }

  & button {
    width: 250px;
    margin: 10px;
    color: black;
  }
`;
