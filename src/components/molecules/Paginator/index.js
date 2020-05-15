import React, { useState, useEffect } from 'react';
import Button from '../../atoms/button';
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

  const PaginatorContainer = styled.div`
    display: flex;
  `;
  const PaginatorTitle = styled.div`
    font-size: 2em;
  `;
  return (
    <PaginatorContainer>
      <Button
        name={previousTextButton}
        onClick={previousFunc}
        borderColor={buttonColor}
      ></Button>
      <PaginatorTitle>
        {actualPage}/{totalPage}
      </PaginatorTitle>
      <Button
        name={nextTextButton}
        onClick={nextFunc}
        borderColor={buttonColor}
      ></Button>
    </PaginatorContainer>
  );
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
