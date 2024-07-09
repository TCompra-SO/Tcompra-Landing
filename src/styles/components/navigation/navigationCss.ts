import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Asegúrate de que el header ocupe todo el ancho */
  background-color: var(--theme-blue);
  box-shadow: 0px 10px 60px 0px rgba(92, 48, 253, 0.2);
  z-index: 1000;
`;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  padding: 1vh 5vw;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    margin-bottom: 1vh; /* Margen inferior en unidades de viewport height */
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2vw;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1215px) {
    display: none;
  }
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  transition: color 0.3s ease, font-weight 0.4s ease-in-out;
  font-size: 16px;
  position: relative;

  &:hover {
    font-weight: 400;
    color: #ff007f;
    padding-bottom: 0.2em;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px; /* Altura predefinida */
    bottom: 0;
    left: 0;
    background-color: #ff007f;
    transform: scaleX(0); /* Estado inicial */
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover:after {
    transform: scaleX(1); /* Estado al pasar el ratón */
    transform-origin: bottom left;
  }
`;

const NavLinkLogo = styled.a`
  text-decoration: none;
  color: white;
  transition: color 0.3s ease, font-weight 0.4s ease-in-out;
  font-size: 16px;
  position: relative;

  &:hover: {
  }
`;

const RegisterButton = styled.div`
  display: inline-block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export {
  Header,
  HeaderMain,
  Navbar,
  Logo,
  NavLinks,
  NavItem,
  NavLink,
  NavLinkLogo,
  RegisterButton,
};
