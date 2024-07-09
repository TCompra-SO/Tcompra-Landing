import styled from "styled-components";

// Estilos para la sección de 800px
const SectionEnd = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
  margin-top: 2em;
`;

// Estilos para cada contenedor dentro de la sección
const WidgetEnd = styled.div`
  flex: 1; /* Ocupa el espacio disponible de manera equitativa */
`;

// Estilos para el texto dentro de los contenedores
const TextEnd = styled.p`
  color: rgba(255, 255, 255, 0.7019607843);
  visibility: visible;
  animation-delay: 0.6s;
  text-align: right;
`;

const ItemUpCss = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 0.3em;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--theme);
  }
`;

// Estilo de la imagen dentro del cuadrado
const ImgUpCss = styled.img`
  width: 30%;
  height: 30%;
  object-fit: contain; /* Ajusta la imagen dentro del cuadrado */
  display: block; /* Asegura que la imagen no tenga espacios adicionales */
  margin: auto; /* Centra la imagen horizontalmente */
  position: relative; /* Permite ajustar la imagen */
  top: 50%; /* Alinea la imagen verticalmente al 50% */
  transform: translateY(-50%); /* Corrige la alineación vertical */
`;

export { SectionEnd, WidgetEnd, TextEnd, ItemUpCss, ImgUpCss };
