import styled from "styled-components";

interface ImgLogoProps {
  src: string;
  height?: string;
  width?: string;
}

export const ImgLogo = styled.img<ImgLogoProps>`
  display: none;
  display: block;
  max-width: ${(props) => props.width || "100%"}; 
  height: ${(props) => props.height || "60px"}; 
  content: url(${(props) => props.src});
`;
