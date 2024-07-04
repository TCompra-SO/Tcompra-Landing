import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

import {
    Header,
    Navbar,
    Logo,
    NavLinks,
    NavItem,
    NavLink,
    RegisterButton,
    HeaderMain
} from '../styles/components/navigation/navigation'; // Ajusta la ruta según la ubicación de tus archivos de estilos


import { faEnvelope, faPhone, faArrowRight } from '../styles/fontAwesome/fontawesome';
import {
    ContentMenuCss,
    ContentSocialIconsCss,
    MenuTitleCss,
    TextContentCss,
    SectionMenuesCss,
    ContactLinkCss,
    ListItemCss,
    ListItemsCss,
    LinkMenuCss,
    IconContentSocialCss,
    ImgIcon
} from "../styles/components/footer/footerMenuesCss"

import LogoWhite from '../images/logo/logo-white.svg';
import LogoBlack from '../images/logo/logo-black.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '../styles/fontAwesome/fontawesome'; // Ajusta la ruta según la ubicación de tu ícono FontAwesome
import { ImgLogo } from '../styles/Utils/logo'; // Ajusta la ruta según la ubicación de tu imagen de logo
import { ButtonPrimary } from '../styles/components/buttons/buttonPrimary'; // Ajusta la ruta según la ubicación de tus botones
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1215px) {
    display: flex;
    position: absolute;
    right: 10px;
  }
`;

const Bar = styled.span`
  height: 3px;
  width: 25px;
  background-color: white;
  margin: 4px 0;
  transition: all 0.3s;
`;

const MenuSlideout = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  height: 100%;
  width: 400px;
  max-width: 80%; /* Ajustar el ancho máximo para dispositivos móviles */
  background-color: var(--white);
  flex-direction: column;
  align-items: center;
  transition: right 0.5s ease;
  padding: 20px;
  border-left: 2px solid var(--theme);
  z-index: 99;

  @media (max-width: 768px) {
    width: 400px; /* Ajustar el ancho para dispositivos móviles */
    max-width: 100%;
  }
`;

const CloseMenuButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--theme);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const ResponsiveNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const ResponsiveNavLinkItem = styled.li`
  margin: 0.5em 0;
  border-bottom: 1px solid #e0e3ed;
  padding-bottom: 1em;
`;

const ResponsiveNavLink = styled.a`
  width: 100%;
  padding: 10px 0;
  color: var(--header);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  margin: 0;
  text-align: left;
  &:hover {
    color: var(--theme);
  }
`;

const ResponsiveNavTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const ItemTitle = styled.h4`
  font-size: 22px;
  font-weight: 500;
  line-height: 137%;
`;

const NavigationTest: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Header>
      <GlobalStyle />
      <HeaderMain>     
      <NavLink href="#"><ImgLogo src={LogoWhite} alt="Logo" /></NavLink>
        <MenuToggle onClick={toggleMenu}>
          <Bar />
          <Bar />
          <Bar />
        </MenuToggle>
        <NavLinks>
                        <NavItem><NavLink href="#Homes">Inicio</NavLink></NavItem>
                        <NavItem><NavLink href="#AboutUs">Nosotros</NavLink></NavItem>
                        <NavItem><NavLink href="#Services">Servicios</NavLink></NavItem>
                        <NavItem><NavLink href="#Benefits">Beneficios</NavLink></NavItem>
                        <NavItem><NavLink href="#HowItWorks">¿Cómo Funciona?</NavLink></NavItem>
                        <NavItem><NavLink href="#Contacts">Contactos</NavLink></NavItem>
        </NavLinks>
        <RegisterButton>
        <ButtonPrimary hoverBgColor='Black' href="/"> <FontAwesomeIcon icon={faUser} /> Iniciar Sesión/Registro</ButtonPrimary>
        </RegisterButton>
      </HeaderMain>

      <MenuSlideout isOpen={menuOpen}>
        <ResponsiveNavTitle>
      <NavLink href="#"><ImgLogo src={LogoBlack} height='35px' width='153px' alt="Logo" /></NavLink>
      <CloseMenuButton onClick={toggleMenu}>X</CloseMenuButton>
      </ResponsiveNavTitle>
        
        <ResponsiveNavLinks>
          <ResponsiveNavLinkItem><ResponsiveNavLink href="#Homes">Inicio</ResponsiveNavLink></ResponsiveNavLinkItem>
          <ResponsiveNavLinkItem><ResponsiveNavLink href="#AboutUs">Nosotros</ResponsiveNavLink></ResponsiveNavLinkItem>
          <ResponsiveNavLinkItem><ResponsiveNavLink href="#Services">Servicios</ResponsiveNavLink></ResponsiveNavLinkItem>
          <ResponsiveNavLinkItem><ResponsiveNavLink href="#Benefits">Beneficios</ResponsiveNavLink></ResponsiveNavLinkItem>
          <ResponsiveNavLinkItem><ResponsiveNavLink href="#HowItWorks">¿Cómo Funciona?</ResponsiveNavLink></ResponsiveNavLinkItem>
          <ResponsiveNavLinkItem><ResponsiveNavLink href="#Contacts">Contactos</ResponsiveNavLink></ResponsiveNavLinkItem>
        </ResponsiveNavLinks>
        <ItemTitle>Información</ItemTitle>
        <TextContentCss> <ContactLinkCss color='var(--header)' href="mailto:contacto@plataforma.com"><FontAwesomeIcon icon={faEnvelope} />info@tcompra.com</ContactLinkCss></TextContentCss>
                <TextContentCss> <ContactLinkCss color='var(--header)' href=""><FontAwesomeIcon icon={faPhone} />(+51) 987456321</ContactLinkCss></TextContentCss>

        <ButtonPrimary hoverBgColor='var(--header)' href="/">Enviar Mensaje</ButtonPrimary>
      </MenuSlideout>

    </Header>
  );
}

export default NavigationTest;
