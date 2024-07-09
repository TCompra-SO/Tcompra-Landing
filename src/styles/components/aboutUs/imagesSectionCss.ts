import styled from "styled-components";

const ImagesSectionCss = styled.div`
  display: flex; // Habilita Flexbox
  flex-direction: row; // Alinea los elementos en una fila
  justify-content: space-between; // Espaciado entre los elementos
  align-items: center; // Alinea los elementos verticalmente al centro
  flex: 0 0 auto;
  width: 100%;

  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export { ImagesSectionCss };
