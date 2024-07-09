import { styled } from "styled-components";

const InfoSectionCss = styled.div`
  display: flex; // Habilita Flexbox
  flex-direction: column; // Alinea los elementos en una fila
  justify-content: space-between; // Espaciado entre los elementos
  align-items: center; // Alinea los elementos verticalmente al centro
  flex: 0 0 auto;
  //width: 50%;
  width: 100%;
  max-width: 100%;
  padding-right: 4em;
  padding-left: 4em;
  margin-top: var(--bs-gutter-y);

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
  }
`;

export { InfoSectionCss };
