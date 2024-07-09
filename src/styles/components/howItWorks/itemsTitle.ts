import styled from "styled-components";

interface ContenItemProps {
  $textalign?: "left" | "center" | "right";
  $alignitems?: "flex-start" | "center" | "flex-end";
}

const SectionItems = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  padding-bottom: 2em;
  align-items: center !important;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ContenItem = styled.div<ContenItemProps>`
  visibility: visible;
  animation-delay: 0.2s;
  text-align: ${({ $textalign }) => $textalign || "center"} !important;
  width: 23.5%;
  position: relative; /* Agrega posición relativa para posicionar elementos hijos */
  display: flex;
  flex-direction: column; /* Alinear elementos en columna */
  align-items: ${({ $alignitems }) =>
    $alignitems || "center"}; /* Centrar horizontalmente los elementos */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemTitleCss = styled.h4`
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 500;
  line-height: 137%;
  margin-top: 0.3em;
`;

const ItemLink = styled.a`
  text-decoration: none;
  outline: none !important;
  cursor: pointer;
  color: var(--header);
  transition: all 0.4s ease-in-out;
  &:hover {
    color: var(--theme);
  }
`;

const ItemText = styled.p`
  font-weight: 500;
  margin: 0px;
  transition: all 0.4s ease-in-out;
  line-height: 28px;
  color: var(--text);
`;

const ItemCircle = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%; /* Hace que el div sea un círculo */
  border: 6px solid #bc1373; /* Borde celeste */
  background-color: transparent; /* Fondo transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px; /* Ajusta el tamaño del número */
  color: #bc1373; /* Color celeste para el número */
  font-weight: bold;
  box-sizing: border-box; /* Asegura que el borde se incluya en las dimensiones */
  margin-bottom: 10px; /* Espacio opcional entre el círculo y el título */
`;

export {
  ItemTitleCss,
  ItemLink,
  ContenItem,
  SectionItems,
  ItemText,
  ItemCircle,
};
