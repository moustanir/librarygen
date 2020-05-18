import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import FormInput from '../atoms/Input';
import Button from '../atoms/Button';

const Login = props => {
  const theme = useContext(ThemeContext);

  return (
    <LoginContainer colorBackground={theme.white}>
      <LoginLogo src='/logo.png' alt='marvel logo'></LoginLogo>
      <FormInput
        type='email'
        placeholder='Login'
        inputName='Email'
        inputColor={theme.primary}
      ></FormInput>
      <FormInput
        placeholder='Password'
        inputName='Password'
        type='password'
        inputColor={theme.primary}
      ></FormInput>
      <Button
        name='Valider'
        borderColor={theme.primary}
        textHoverColor={theme.white}
        fillingColor={theme.primary}
        textColor={theme.dark}
        IsInvert={true}
      ></Button>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  background-color: ${props => props.colorBackground};
  padding: 20px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const LoginLogo = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0.001em;
`;

export default Login;
