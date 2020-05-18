import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import styled from 'styled-components';
import { autocomplete } from './autocomplete-helper';

const AutoCompleteInput = ({
  source,
  onClickAction,
  name,
  label,
  ...props
}) => {
  useEffect(() => {
    autocomplete(document.getElementById(`autocomplete-${name}`), source);
  }, [name, source]);
  return (
    <AutoCompleteInputContainer>
      <Input
        name={name}
        inputName={label}
        id={`autocomplete-${name}`}
        {...props}
      ></Input>
      <Button
        name='Rechercher'
        borderColor='green'
        fillingColor='green'
        IsInvert={true}
        textColor='white'
        textHoverColor='green'
        onClick={() => {
          onClickAction(document.getElementById(`autocomplete-${name}`).value);
        }}
      ></Button>
    </AutoCompleteInputContainer>
  );
};
const AutoCompleteInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

AutoCompleteInput.propTypes = {
  source: PropTypes.array,
  onClickAction: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string
};

export default AutoCompleteInput;
