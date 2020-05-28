import React, { useState, useEffect } from 'react';
import Button from '../../atoms/Button';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paginator = ({
  totalElements,
  offsetDefined,
  previousTextButton,
  nextTextButton,
  previousFunc,
  actualPage = 1,
  buttonColor = 'blue',
  nextFunc
}) => {
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    setTotalPage(Math.ceil(totalElements / offsetDefined));
  }, [totalPage, offsetDefined, totalElements]);

  return (
    <PaginatorContainer>
      <Button
        name={previousTextButton}
        onClick={previousFunc}
        borderColor={buttonColor}
        textColor='black'
        IsInvert={true}
      ></Button>
      <PaginatorTitle>
        {actualPage}/{totalPage}
      </PaginatorTitle>
      <Button
        name={nextTextButton}
        onClick={nextFunc}
        borderColor={buttonColor}
        textColor='black'
        IsInvert={true}
      ></Button>
    </PaginatorContainer>
  );
};

const PaginatorContainer = styled.div`
  display: flexbox;
  flex-direction: row;
`;
const PaginatorTitle = styled.div`
  font-size: 2em;
`;
Paginator.defaultProps = {
  offsetDefined: 1,
  totalElements: 1,
  previousTextButton: '',
  nextTextButton: '',
  actualPage: 1,
  buttonColor: ''
};
Paginator.propTypes = {
  offsetDefined: PropTypes.number,
  totalElements: PropTypes.number,
  previousTextButton: PropTypes.string,
  nextTextButton: PropTypes.string,
  previousFunc: PropTypes.func,
  nextFunc: PropTypes.func,
  actualPage: PropTypes.number,
  buttonColor: PropTypes.string
};
export default Paginator;
