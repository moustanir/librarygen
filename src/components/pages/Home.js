import React, { useContext } from 'react';
import FormInput from '../atoms/FormInput';
import Button from '../atoms/Button';
import Classic from '../templates/Classic';
import { ThemeContext } from 'styled-components';

const Home = props => {
  const theme = useContext(ThemeContext);
  return (
    <Classic>
      <FormInput
        inputColor={theme.orange}
        placeholder='Insérer le titre de votre livre ou auteur'
      ></FormInput>
      <Button
        name='Valider'
        borderColor={theme.primary}
        textHoverColor={theme.white}
        fillingColor={theme.primary}
        textColor={theme.dark}
        IsInvert={true}
      ></Button>
      <h4>Récemment uploadé et partagé pour tout le monde</h4>
    </Classic>
  );
};

export default Home;
