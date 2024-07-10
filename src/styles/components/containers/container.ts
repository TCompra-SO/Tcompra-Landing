import styled from "styled-components";

interface ContainerCssProps {
  $backgroundcolor?: string; // Propiedad opcional para el color de fondo
}

const ContainerMainCss = styled.div<ContainerCssProps>`
  background-color: ${({ $backgroundcolor }) =>
    $backgroundcolor || "transparent"};
  width: 100%;
  overflow-x: hidden; // Asegura que no haya scroll horizontal en el contenedor principal
`;

const ContainerCss = styled.div<ContainerCssProps>`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.55);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
  background-color: ${({ $backgroundcolor }) =>
    $backgroundcolor || "transparent"};
  margin-top: 2em;
  padding-top: 1em;
  box-sizing: border-box; // Asegura que el padding se incluya en el ancho total

  overflow-y: hidden;
  overflow-x: hidden;

  @media (min-width: 1400px) {
    max-width: 1314px;
  }
  @media (max-width: 768px) {
    padding-right: 1em;
    padding-left: 1em;
    flex-direction: column;
  }
`;

interface MainBodyProps {
  $alignhorizontal?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  $margintop?: string;
  $marginbottom?: string;
  $flexdirection?: "row" | "column"; // Nueva propiedad para flex-direction
  $gap?: string; // Nueva propiedad para gap
  $displayResponsive?: string;
}

// Define el componente styled con las props extendidas
const ContainerContentCss = styled.div<MainBodyProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexdirection || "column"};
  justify-content: center; /* Centra verticalmente los elementos */
  align-items: ${(props) =>
    props.$alignhorizontal}; /* Alineación horizontal pasada como parámetro */
  width: 100%;
  margin-top: ${(props) => props.$margintop};
  margin-bottom: ${(props) => props.$marginbottom};
  gap: ${(props) => props.$gap || "0"}; /* Espacio entre elementos */

  @media (max-width: 768px) {
    display: block;
    display: ${(props) => props.$displayResponsive || "block"};
    gap: 1.5em;
  }
`;

const MainBody = styled.div`
  margin: 0;
`;

export { ContainerCss, ContainerMainCss, MainBody, ContainerContentCss };
