import styled from "styled-components";

export const CardContainer = styled.div`
  display: block;
  height: 430px;
  width: 400px;
  /* border-radius: 20px; */
  border-style: solid;
  border-width: 1px;
  margin: 15px 15px;
  background-color: whitesmoke;
`;

export const CardImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 398px;
  height: 300px;
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardName = styled.p`
  font-size: 18px;
  margin: 2px;
`;

export const CardPrice = styled.p`
  font-size: 20px;
  margin: 2px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
`;