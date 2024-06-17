import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  /* background-color: #86796e; */
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const LogoImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 120px;
  height: inherit;
`;
