import styled from "styled-components";

const SectionContactCss = styled.div`
  border-radius: 1.8rem;
  background-color: var(--theme);
  position: relative;
  z-index: 9;
  overflow: hidden;
  display: flex;
  flex-direction: row; /* Alinea los componentes horizontalmente */
  @media (max-width: 768px) {
    display: block;
  }
`;

interface ImgSectionProps {
  $imageurl: string;
}

const ImgSectionCss = styled.div<ImgSectionProps>`
  width: 30%;
  flex: 0.85;
  background-image: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    visibility: hidden;
    width: 0%;
  }
`;

const FormSectionCss = styled.div`
  width: 60%;
  flex: 1;
  padding: 3em 4em 3em 4em;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1em 1em 1em 1em;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  /* Ancho máximo del formulario */
  margin: 0 auto; /* Centrado horizontal */
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan */
  gap: 10px; /* Espacio entre los elementos */
  margin-bottom: 15px; /* Espacio entre filas */
`;

const FormGroup = styled.div`
  flex-basis: 100%;
`;

const Input = styled.input<{
  width?: string;
  $marginright?: string;
  $marginleft?: string;
}>`
  width: ${(props) => props.width || "100%"};
  border: none;
  outline: none;
  background-color: var(--white);
  color: var(--text);
  border-radius: 0.6rem;
  padding: 15px 20px;
  margin-right: ${(props) => props.$marginright || "0"};
  margin-left: ${(props) => props.$marginleft || "0"};
`;

const TextArea = styled.textarea`
  padding: 15px 20px;
  border-radius: 0.6rem;
  border: none;
  outline: none;
  background-color: var(--white);
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: var(--text);
`;

export {
  SectionContactCss,
  ImgSectionCss,
  FormSectionCss,
  FormContainer,
  FormRow,
  FormGroup,
  Input,
  TextArea,
};
