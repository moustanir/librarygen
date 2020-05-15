import React from 'react';
import styled from 'styled-components';

const SidebarMenu = props => {
  const SidebarComponent = styled.div`
    overflow: hidden;
    background-color: ${props => props.theme.orange};
  `;
  return <SidebarComponent>{props.children}</SidebarComponent>;
};

export default SidebarMenu;
