import React from 'react';
import FullSidebar from '../organisms/FullSidebar';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: stretch;
`;
const Classic = props => {
  return (
    <PageContainer>
      <FullSidebar></FullSidebar>
      {props.children}
    </PageContainer>
  );
};

export default Classic;
