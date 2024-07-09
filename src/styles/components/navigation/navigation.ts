import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Añadido para que el header ocupe todo el ancho */
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
  transition: color 0.3s ease;
  font-size: 16px;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: var(--theme);
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
  RegisterButton,
};
