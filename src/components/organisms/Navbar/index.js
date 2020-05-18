import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const FullSidebar = props => {
  const [isNavbarActive, setisNavbarActive] = useState(false);
  const [icon, setIcon] = useState(faBars);
  const theme = useContext(ThemeContext);

  function activeNavbar() {
    if (isNavbarActive) {
      setisNavbarActive(false);
      setIcon(faBars);
    } else {
      setisNavbarActive(true);
      setIcon(faTimes);
    }
  }
  function disconnectUser() {}

  return (
    <NavbarContainer>
      <NavbarItemHome colorBackground={theme.colors.lightPrimary} href='/'>
        LibraGen
      </NavbarItemHome>
      <NavbarItemIcon href='#bars' onClick={activeNavbar}>
        <FontAwesomeIcon icon={icon} />
      </NavbarItemIcon>
      <NavbarItem isActive={isNavbarActive} href='/user/profile'>
        Mon compte
      </NavbarItem>
      <NavbarItem isActive={isNavbarActive} href='/books'>
        Mes Livres
      </NavbarItem>
      <NavbarItem isActive={isNavbarActive} href='/books/upload'>
        Uploader un Livre
      </NavbarItem>
      <NavbarItem isActive={isNavbarActive} href='#' onClick={disconnectUser}>
        Deconnexion
      </NavbarItem>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;
  background-color: #333;
  justify-content: space-between;
  height: 100%;
  max-height: 116em;
`;
const NavbarItem = styled.a`
  align-self: center;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  width: 100%;
  transition-duration: 1s;
  transition: visibility 0s, opacity 0.5s linear;
  display: ${props => (props.isActive ? 'block' : 'none')};
  &:hover {
    background-color: ${props => props.colorBackground};
  }
`;
const NavbarItemHome = styled.a`
  align-self: flex-start;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  background-color: ${props => props.colorBackground};
`;
const NavbarItemIcon = styled.a`
  align-items: flex-end;
  position: absolute;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;
export default FullSidebar;
