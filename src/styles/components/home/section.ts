import styled from "styled-components";

interface ImgBackProps {
  src: string; // Propiedad para la dirección de la imagen
}

const Section = styled.section<ImgBackProps>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
  overflow: hidden;
  padding: 12vh 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      66.34% 66.34% at 50% 25.71%,
      rgba(16, 24, 40, 0.3) 0%,
      rgba(16, 24, 40, 0.7) 100%
    );
    z-index: 0;
  }
`;

const ContainerSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 8vh 0;
  }
`;

export { Section, ContainerSection };
