import styled from "styled-components";

const SectionCardCss = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  /* Permitir que la sección se expanda según el contenido */
  height: auto;
  justify-content: space-between; /* Para separar uniformemente las tarjetas */
  padding-bottom: 4em;

  @media (max-width: 768px) {
    display: block;
    padding-bottom: 2em; /* Ajuste para dispositivos móviles */
  }
`;

const CardBenefitCss = styled.div`
  width: 23.5%; /* Ajustar según el número de tarjetas que deseas en una fila */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em; /* Añadir margen inferior para separación vertical */
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto 2em auto; /* Centrar y añadir margen inferior */
  }
`;

const ImgBenefitsCss = styled.img`
  margin-top: 30px;
  width: 100%;
  border-radius: 0.9rem;
  object-fit: cover; /* Asegura que la imagen se ajuste correctamente */
`;

const ContentBenefitCss = styled.div`
  padding-top: 20px;
  text-align: left; /* Mantener alineación del texto a la izquierda */
  width: 100%; /* Asegura que el contenido ocupe todo el ancho del contenedor */
`;

const ContentTitleCss = styled.p`
  font-weight: 500;
  opacity: 0.8;
  color: var(--white);
  margin-bottom: 5px;
  margin-top: 0;
`;

const TextContentCss = styled.h3`
  font-size: 23px;
  margin-bottom: 20px;
  margin-top: 0;
  --bs-text-opacity: 1;
  color: var(--white);
  font-weight: 500;
  line-height: 150%;
`;

export {
  CardBenefitCss,
  ImgBenefitsCss,
  ContentBenefitCss,
  ContentTitleCss,
  TextContentCss,
  SectionCardCss,
};
