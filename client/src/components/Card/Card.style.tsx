import styled from "styled-components";

export const CardContainer = styled.div`
  display: block;
  height: 500px;
  width: 500px;
  border-radius: 15px;
  background-color: brown;
  margin: 10px 10px;
`;

export const CardImageContainer = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 500px;
  height: auto;
  border-radius: 15px;
`;

export const CardName = styled.div``;

export const CardFooter = styled.div``;
