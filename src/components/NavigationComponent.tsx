import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

import {
  Header,
  NavLinks,
  NavItem,
  NavLink,
  RegisterButton,
  HeaderMain,
  NavLinkLogo
} from '../styles/components/navigation/navigationCss'; // Ajusta la ruta según la ubicación de tus archivos de estilos


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

import {
  MenuToggle,
  Bar,
  MenuSlideout,
  CloseMenuButton,
  ResponsiveNavLink,
  ResponsiveNavTitle,
  ItemTitle,
  ResponsiveNavLinkItem,
  ResponsiveNavLinks,
} from '../styles/components/navigation/navigationResponsiveCss'

import facebookIcon from "../images/utils/icons/facebook-f.svg";
import instagramIcon from "../images/utils/icons/instagram.svg";
import youtubeIcon from "../images/utils/icons/youtube.svg";
import linkedinIcon from "../images/utils/icons/linkedin-in.svg";

const NavigationComponent: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  interface ImgLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    srcSet: string;
  }

  return (
    <Header>

      <HeaderMain>
        <NavLinkLogo href="/"><ImgLogo src={LogoWhite} alt="Logo" /></NavLinkLogo>
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
          <ButtonPrimary $hoverbgcolor='Black' href="/"> <FontAwesomeIcon icon={faUser} /> Iniciar Sesión/Registro</ButtonPrimary>
        </RegisterButton>
      </HeaderMain>

      <MenuSlideout $isopen={menuOpen}>
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

        <ButtonPrimary $hoverbgcolor='var(--header)' href="/">Enviar Mensaje</ButtonPrimary>

        <ContentSocialIconsCss>
          <LinkMenuCss href=""><IconContentSocialCss $bgcolor='#1d1d1d'><ImgIcon src={facebookIcon} alt='icon' /></IconContentSocialCss></LinkMenuCss>
          <LinkMenuCss href=""><IconContentSocialCss $bgcolor='#1d1d1d'><ImgIcon src={instagramIcon} alt='icon' /></IconContentSocialCss></LinkMenuCss>
          <LinkMenuCss href=""><IconContentSocialCss $bgcolor='#1d1d1d'><ImgIcon src={youtubeIcon} alt='icon' /></IconContentSocialCss></LinkMenuCss>
          <LinkMenuCss href=""><IconContentSocialCss $bgcolor='#1d1d1d'><ImgIcon src={linkedinIcon} alt='icon' /></IconContentSocialCss></LinkMenuCss>
        </ContentSocialIconsCss>
      </MenuSlideout>

    </Header>
  );
}

export default NavigationComponent;
