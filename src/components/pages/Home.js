import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Classic from '../templates/Classic';
import FormInput from '../atoms/Input';
import Button from '../atoms/Button';

const Home = props => {
  const theme = useContext(ThemeContext);
  const SearchContainer = styled.div`
    padding: 2em;
  `;
  return (
    <Classic>
      <SearchContainer>
        <FormInput
          inputColor={theme.colors.lightPrimary}
          inputName='Entrez votre recherche'
          placeholder='Insérer le titre de votre livre ou auteur'
        ></FormInput>
        <Button
          name='Valider'
          borderColor={theme.colors.primary}
          textHoverColor={theme.colors.white}
          fillingColor={theme.colors.primary}
          textColor={theme.colors.dark}
          IsInvert={true}
        ></Button>
        <h4>Récemment uploadé et partagé pour tout le monde</h4>
      </SearchContainer>
    </Classic>
  );
};

export default Home;
