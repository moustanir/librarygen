import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../atoms/FormInput';
import Button from '../../atoms/button';
import styled from 'styled-components';
import { autocomplete } from './autocomplete-helper';

const AutoCompleteInput = ({ source, onClickAction, name, ...props }) => {
  useEffect(() => {
    autocomplete(document.getElementById(`autocomplete-${name}`), source);
  }, [name, source]);

  return (
    <AutoCompleteInputContainer>
      <FormInput name={name} id={`autocomplete-${name}`} {...props}></FormInput>
      <Button
        name='Rechercher'
        borderColor='green'
        fillingColor='green'
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
  flex-direction: row;
`;
AutoCompleteInput.propTypes = {
  source: PropTypes.array,
  onClickAction: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string
};

export default AutoCompleteInput;
