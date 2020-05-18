import React from 'react';
import styled from 'styled-components';

const SidebarMenu = props => {
  return <SidebarComponent>{props.children}</SidebarComponent>;
};
const SidebarComponent = styled.div`
  overflow: hidden;
  background-color: ${props => props.theme.orange};
`;

export default SidebarMenu;
