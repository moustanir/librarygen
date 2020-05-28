import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from '../../atoms/NavbarMenu';
import NavbarMenuItem from '../../atoms/NavbarMenuItem';

const Navbar = props => {
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

  return (
    <NavbarMenu>
      <NavbarItemHome colorBackground={theme.colors.lightPrimary} href='/'>
        LibraGen
      </NavbarItemHome>
      <NavbarItemIcon href='#bars' onClick={activeNavbar}>
        <FontAwesomeIcon icon={icon} />
      </NavbarItemIcon>
      <NavbarMenuItem
        name={'Uploader un Livre'}
        isActive={isNavbarActive}
        href='/books/upload'
      ></NavbarMenuItem>
    </NavbarMenu>
  );
};

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

export default Navbar;
