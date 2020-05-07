import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const Button = ({
  name,
  borderColor = 'black',
  fillingColor = 'black',
  textColor = 'black',
  textHoverColor = 'white',
  IsInvert = true,
  ...props
}) => {
  const StyledButton = styled.button`
    background-color: ${IsInvert} ? white : ${fillingColor};
    border: none;
    color: ${textColor};
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border: 2px solid ${borderColor};
    &:hover {
      background-color: ${IsInvert} ? ${fillingColor} : white;
      color: ${IsInvert} ? ${textHoverColor} : ${textColor};
    }
  `;

  return (
    <div>
      <StyledButton {...props}>{name}</StyledButton>
    </div>
  );
};

Button.propTypes = {
  name: Proptypes.string,
  borderColor: Proptypes.string,
  fillingColor: Proptypes.string,
  textHoverColor: Proptypes.string,
  textColor: Proptypes.string,
  IsInvert: Proptypes.bool
};

export default Button;
