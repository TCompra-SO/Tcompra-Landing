import styled from "styled-components";

interface ButtonProps {
  bgcolor?: string;
  color?: string;
  border?: string;
  padding?: string; // Agregamos padding como propiedad opcional
  hoverbgcolor?: string;
  hoverborder?: string;
  hovercolor?: string;
  width?: string;
}

export const ButtonPrimary = styled.a<ButtonProps>`
  display: block;
  width: ${(props) =>
    props.width || "none"}; /* Ancho del botÃ³n, por defecto 0 */
  outline: none !important;
  background: ${(props) => props.bgcolor || "var(--theme)"};
  color: ${(props) => props.color || "var(--white)"};
  font-size: 16px;
  font-weight: 500;
  padding: 22px 30px;
  transition: all 0.4s ease-in-out;
  letter-spacing: 0;
  border-radius: 0.9rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  line-height: 1;
  border: ${(props) => props.border || "none"};
  z-index: 9;

  &:hover {
    background-color: ${(props) => props.hoverbgcolor || "#45a049"};
    border: ${(props) => props.hoverborder || "none"};
    color: ${(props) => props.hovercolor || "var(--white)"};
  }
`;
