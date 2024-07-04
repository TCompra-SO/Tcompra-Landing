import styled from "styled-components";

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

interface MenuSlideoutProps {
  $isopen: boolean;
}

const MenuSlideout = styled.div<MenuSlideoutProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isopen ? "0" : "-100%")};
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

export {
  MenuToggle,
  Bar,
  MenuSlideout,
  CloseMenuButton,
  ResponsiveNavLink,
  ResponsiveNavTitle,
  ItemTitle,
  ResponsiveNavLinkItem,
  ResponsiveNavLinks,
};
