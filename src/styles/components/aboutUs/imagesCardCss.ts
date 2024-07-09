import styled from "styled-components";

interface ImagesCardProps {
  src: string; // Propiedad para la URL de la imagen
}

const ImagesCardCss = styled.div<ImagesCardProps>`
  width: 100%; // Ajusta el ancho según tus necesidades
  height: 100%; // Ajusta la altura según tus necesidades
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; // Asegura que la imagen no se repita
  border-radius: 0.9rem;

  @media (max-width: 768px) {
    height: auto; // Ajusta la altura automáticamente en dispositivos móviles
  }
`;

const Img1CardCss = styled.div`
  flex: 0 0 auto;
  width: 48%;
  height: 450px;

  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));

  @media (max-width: 768px) {
    width: 100%; // Ocupa todo el ancho en dispositivos móviles
    height: 650px; // Ajusta la altura para dispositivos móviles
    padding-bottom: 1em;
    margin-right: 0;
    margin-left: 0;
  }
`;

const Img2CardCss = styled.div`
  flex: 0 0 auto;
  width: 48%;
  height: 500px;

  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));

  @media (max-width: 768px) {
    width: 100%; // Ocupa todo el ancho en dispositivos móviles
    height: 650px; // Ajusta la altura para dispositivos móviles
    padding-bottom: 1em;
    margin-right: 0;
    margin-left: 0;
  }
`;

export { ImagesCardCss, Img1CardCss, Img2CardCss };
