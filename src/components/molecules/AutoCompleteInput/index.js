import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import styled from 'styled-components';
import { autocomplete } from './autocomplete-helper';
import { ThemeContext } from 'styled-components';

const AutoCompleteInput = ({
  source,
  onClickAction,
  name,
  label,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    autocomplete(document.getElementById(`autocomplete-${name}`), source);
  }, [name, source]);
  const AutoCompleteInputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    @media ${theme.sizes.laptop} {
      flex-direction: column;
    }
  `;
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
        onClick={() => {
          onClickAction(document.getElementById(`autocomplete-${name}`).value);
        }}
      ></Button>
    </AutoCompleteInputContainer>
  );
};

AutoCompleteInput.propTypes = {
  source: PropTypes.array,
  onClickAction: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string
};

export default AutoCompleteInput;
