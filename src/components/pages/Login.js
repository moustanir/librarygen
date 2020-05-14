import React from 'react';
import FormInput from '../atoms/FormInput';
import Button from '../atoms/Button';
import styled from 'styled-components';

const Login = props => {
  const LoginContainer = styled.div`
    background-color: ${props => props.theme.orange};
    padding: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-content: center;
  `;

  const LoginLogo = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 0.001em;
  `;
  return (
    <LoginContainer>
      <LoginLogo src='/logo.png' alt='marvel logo'></LoginLogo>
      <FormInput
        type='text'
        placeholder='Login'
        inputColor={props => props.theme.primary}
      ></FormInput>
      <FormInput
        placeholder='Password'
        type='password'
        inputColor={props => props.theme.primary}
      ></FormInput>
      <Button
        name='Valider'
        borderColor={props => props.theme.primary}
        textHoverColor={props => props.theme.dark}
        fillingColor={props => props.theme.primary}
        textColor={props => props.theme.white}
        IsInvert={false}
      ></Button>
    </LoginContainer>
  );
};

export default Login;
