import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #cecece;
`;

export const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 450px 450px 450px;
  gap: 20px 20px;
  justify-content: center;
  justify-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 450px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 450px;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 450px 450px;
  }
`;
