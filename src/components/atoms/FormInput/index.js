import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormInput = ({
  inputName,
  type,
  name,
  id,
  placeholder = 'Placeholder',
  inputColor = 'grey',
  ...props
}) => {
  const StyledInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid ${inputColor};
  `;

  return (
    <div>
      <label htmlFor={name}>{inputName}</label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        {...props}
      ></StyledInput>
    </div>
  );
};

FormInput.propTypes = {
  inputName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  inputColor: PropTypes.string
};

export default FormInput;
