import React from 'react';
import Navbar from '../organisms/Navbar';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: stretch;
`;
const Classic = props => {
  return (
    <PageContainer>
      <Navbar></Navbar>
      {props.children}
    </PageContainer>
  );
};

export default Classic;
