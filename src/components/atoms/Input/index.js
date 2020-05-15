import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormInput = ({
  inputName,
  type,
  name,
  id,
  placeholder,
  inputColor,
  ...props
}) => {
  const LabelComponent = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: #9b9b9b;
  `;

  const InputComponent = styled.input`
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #d2d2d2;
    outline: 0;
    font-size: 16px;
    color: #212121;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    &:focus {
      padding-bottom: 6px;
      border-bottom: 2px solid ${inputColor};
    }
    &:placeholder-shown ~ ${LabelComponent} {
      font-size: 16px;
      cursor: text;
      top: 20px;
    }
    &:focus ~ ${LabelComponent} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.9em;
      color: ${inputColor};
    }
    &::placeholder {
      color: transparent;
    }
  `;

  const InputContainer = styled.div`
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
  `;
  return (
    <InputContainer>
      <InputComponent
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      <LabelComponent htmlFor={name}>{inputName}</LabelComponent>
    </InputContainer>
  );
};
FormInput.defaultProps = {
  inputName: '',
  type: 'text',
  name: 'Input',
  id: '',
  placeholder: 'Placeholder',
  inputColor: 'Yellow'
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
