import styled from "styled-components";

const Header1Css = styled.h1`
  text-align: left;
  position: relative;
  font-size: 4em;
  color: white;
  margin: 0;
  z-index: 10;

  @media (max-width: 850px) {
    font-size: 2em;
    padding: 0;
  }
`;

export { Header1Css };
