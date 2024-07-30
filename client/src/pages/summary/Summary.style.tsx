import styled from "styled-components";

export const SummaryImageContainer = styled.div`
  width: 200px;

  & img {
    height: 150px;
    width: 150px;
  }

  & svg{
    cursor: pointer;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  height: 300px;
  justify-content: space-around;
  align-items: center;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span{
    font-size: large;
    margin: 10px;
  }

  & button{
    width: 250px;
    margin: 10px;
    color: black;
  }
`;
