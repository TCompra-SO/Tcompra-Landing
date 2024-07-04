import styled from "styled-components";

interface ImagesCardProps {
  src: string; // Propiedad para la URL de la imagen
}
const ImagesCardCss = styled.div<ImagesCardProps>`
  width: 300px; // Ajusta el ancho según tus necesidades
  height: 500px; // Ajusta la altura según tus necesidades
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 0.9rem;
  object-fit: cover;
`;

export { ImagesCardCss };
