import styled from "styled-components";

interface SectionTitleCssProps {
  $textalign?: string; // Propiedad opcional para la alineación del texto
  width?: string;
  $margin?: string;
}

const SectionTitleCss = styled.div<SectionTitleCssProps>`
  position: relative;
  z-index: 99;
  margin-bottom: 20px;
  text-align: ${({ $textalign }) =>
    $textalign ||
    "center"} ;!important; // Usa el prop o un valor predeterminado
  width: ${({ width }) => width || "70%"};
  margin:${({ $margin }) => $margin || "auto"}

`;

export { SectionTitleCss };
