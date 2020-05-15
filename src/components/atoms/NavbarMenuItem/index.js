import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SidebarMenuItem = ({ link, name, isActive = false, ...props }) => {
  const SidebarMenuItemComponent = styled.a`
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
      background-color: ${props => props.theme.lightPrimary};
      color: white;
    }
    &:active {
      background-color: ${props => props.theme.lightPrimary};
      color: white;
    }
  `;
  console.log(name);
  return (
    <SidebarMenuItemComponent href={link}>{name}</SidebarMenuItemComponent>
  );
};

SidebarMenuItem.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string
};
export default SidebarMenuItem;
