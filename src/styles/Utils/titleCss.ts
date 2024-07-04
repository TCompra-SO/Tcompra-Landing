import styled from "styled-components";

interface TitleCssProps {
  color?: string; // Propiedad opcional para el color de texto
  size?:string;
}

const TitleCss = styled.h2<TitleCssProps>`
  visibility: visible;
  animation-delay: 0.3s;
  margin: 0; /* Elimina los márgenes predeterminados */
  padding: 0; /* Si deseas eliminar cualquier padding adicional */
  font-size: ${({ size }) =>
  size || "45px"};
  line-height: 120%;
  font-weight: 500;
  margin-bottom:1em;
  color: ${({ color }) =>
    color || "inherit"}; // Usa el prop o el color por defecto (inherit)
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export { TitleCss };
