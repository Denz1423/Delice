import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: #cecece; */
  background-color: whitesmoke;
  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  gap: 20px 20px;
  justify-content: center;
  justify-items: center;

  @media only screen and (min-width: 1400px) {
    grid-template-columns: 450px 450px 450px;
  }

  @media only screen and (min-width: 845px) and (max-width: 1400px) {
    grid-template-columns: 450px 450px;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 450px;
  }
`;
