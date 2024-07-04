import React from 'react';
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

import LogoWhite from '../images/logo/logo-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '../styles/fontAwesome/fontawesome'; // Ajusta la ruta según la ubicación de tu ícono FontAwesome
import { ImgLogo } from '../styles/Utils/logo'; // Ajusta la ruta según la ubicación de tu imagen de logo
import { ButtonPrimary } from '../styles/components/buttons/buttonPrimary'; // Ajusta la ruta según la ubicación de tus botones

const Navigation: React.FC = () => {
    return (
        <Header>
            <HeaderMain>
                <NavLink href="#"><ImgLogo src={LogoWhite} alt="Logo" /></NavLink>
                <Navbar>

                    <NavLinks>
                        <NavItem><NavLink href="#Homes">Inicio</NavLink></NavItem>
                        <NavItem><NavLink href="#AboutUs">Nosotros</NavLink></NavItem>
                        <NavItem><NavLink href="#Services">Servicios</NavLink></NavItem>
                        <NavItem><NavLink href="#Benefits">Beneficios</NavLink></NavItem>
                        <NavItem><NavLink href="#HowItWorks">¿Cómo Funciona?</NavLink></NavItem>
                        <NavItem><NavLink href="#Contacts">Contactos</NavLink></NavItem>

                    </NavLinks>

                </Navbar>
                <RegisterButton>
                <ButtonPrimary hoverBgColor='Black' href="/"> <FontAwesomeIcon icon={faUser} /> Iniciar Sesión/Registro</ButtonPrimary>
                </RegisterButton>
            </HeaderMain>
        </Header>
    );
};

export default Navigation;
