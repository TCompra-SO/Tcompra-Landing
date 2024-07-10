import styled from "styled-components";

const SectionCardCss = styled.div`
  padding: 60px 70px;
  border-radius: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #510839;
  margin-bottom: 5em;
  @media (max-width: 768px) {
    display: block;
  }
`;

const InfoCardCss = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 4em;
  }
`;

const ImgCardCss = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 7em;
    padding-top: 3em;
  }
`;

const TextCardCss = styled.p`
  visibility: visible;
  animation-delay: 0.5s;
  font-size: 1.2em;
  transition: all 0.4s ease-in-out;
  --bs-text-opacity: 1;
  color: var(--white);
  margin: 1em 0 0;
`;

const ButtonCardCss = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alinea el botón a la derecha */
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

interface CircleProps {
  $size: number;
  $border: number;
  $shadowopacity: number;
  $imageurl?: string;
}

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Ajusta la altura según sea necesario */
  background-color: #000; /* Color de fondo del contenedor */
  position: relative; /* Asegura que los círculos se posicionen relativos a este contenedor */
`;

const CircleBase = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: transparent; /* Fondo transparente por defecto */
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box; /* Asegura que el borde se incluya en las dimensiones */
`;

const CircleStyled = styled(CircleBase)<CircleProps>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border: ${(props) => props.$border}px solid transparent;
  box-shadow: 0 0 1px 1px
    rgba(255, 255, 225, ${(props) => props.$shadowopacity});
`;

const CircleImage = styled(CircleBase)<{ $imageurl: string }>`
  width: 100px;
  height: 100px;
  border: none;
  background-image: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
`;

export {
  SectionCardCss,
  InfoCardCss,
  ImgCardCss,
  ButtonCardCss,
  CircleContainer,
  CircleStyled,
  CircleImage,
  TextCardCss,
};
