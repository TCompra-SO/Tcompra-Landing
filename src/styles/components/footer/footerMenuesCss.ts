import styled from "styled-components";

const SectionMenuesCss = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  /* Permitir que la sección se expanda según el contenido */
  height: auto;
  justify-content: space-between; /* Para separar uniformemente las tarjetas */
  margin-top: 2em;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ContentMenuCss = styled.div`
  width: 23.5%; /* Ajustar según el número de tarjetas que deseas en una fila */
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1em;
  }
`;

const ContentSocialIconsCss = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 70%;
  @media (max-width: 768px) {
    width: 40%;
    margin-bottom: 1em;
  }
`;

interface IconContentSocialProps {
  $bgcolor?: string;
  $hoverbgcolor?: string;
}

const IconContentSocialCss = styled.div<IconContentSocialProps>`
  background-color: ${({ $bgcolor = "rgba(0, 0, 0, 0.4)" }) => $bgcolor};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.8s ease;

  &:hover {
    background-color: ${({ $hoverbgcolor = "var(--theme)" }) =>
      $hoverbgcolor}; /* Cambia al color especificado al hacer hover */
  }
`;

const ImgIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const MenuTitleCss = styled.h4`
  color: var(--white);
  font-size: 22px;
  font-weight: 500;
  line-height: 137%;
  margin: 0;
`;

const TextContentCss = styled.p`
  color: ${(props) => props.color || "rgba(255, 255, 255, 0.55)"};
`;

interface ContactLinkProps {
  color?: string;
}
const ContactLinkCss = styled.a<ContactLinkProps>`
  color: ${(props) => props.color || "rgba(255, 255, 255, 0.55)"};
  font-size: 16px;
  font-weight: 400;
  position: relative; // Asegura que el pseudo-elemento se posicione correctamente

  .svg-inline--fa {
    color: var(--theme);
    padding-right: 1em; // Inicialmente sin padding
    position: relative;
  }

  &:hover {
    color: var(--theme);
  }
`;

const LinkMenuCss = styled.a`
  color: rgba(255, 255, 255, 0.55);
  font-size: 16px;
  font-weight: 400;
  position: relative; // Asegura que el pseudo-elemento se posicione correctamente

  .svg-inline--fa {
    color: var(--theme);
    padding-right: 0; // Inicialmente sin padding
    position: relative;
    opacity: 0; // Inicialmente oculta el ícono
    transition: padding-right 0.3s ease-out, opacity 0.3s ease-out; // Transición suave para padding y opacidad
  }

  &:hover .svg-inline--fa {
    padding-right: 1em; // Incrementa el padding hasta 1em
    opacity: 1; // Muestra el ícono
  }

  &:hover {
    color: var(--theme);
  }
  @media (max-width: 768px) {
    margin-right: 1em;
  }
`;

const ListItemsCss = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItemCss = styled.li`
  text-transform: capitalize;
  background-image: linear-gradient(var(--theme), var(--theme));
  background-position: 0 95%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  display: table;
  transition: all 0.4s ease-in-out;
  position: relative;
  margin-top: 1em;

 
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px; // Ajusta el grosor de la línea
      bottom: 0;
      left: 0;
      background-color: var(--theme); // Color del subrayado
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
      
    }
  }
`;

export {
  ContentMenuCss,
  ContentSocialIconsCss,
  MenuTitleCss,
  TextContentCss,
  SectionMenuesCss,
  ContactLinkCss,
  ListItemsCss,
  ListItemCss,
  LinkMenuCss,
  IconContentSocialCss,
  ImgIcon,
};
