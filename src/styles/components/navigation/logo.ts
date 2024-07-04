import styled from "styled-components";

interface ImgLogoProps {
  src: string; // Propiedad para la dirección de la imagen
}

export const ImgLogo = styled.img<ImgLogoProps>`
  display: none;
  display: block;
  max-width: 100%;
  height: 60px;
  content: url(${(props) => props.src});
`;
