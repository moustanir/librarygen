import React from 'react';
import FormInput from '../atoms/FormInput';
import Button from '../atoms/button';
import styled from 'styled-components';

const LoginContainer = styled.div`
  background-color: transparent;
  border: 2px solid red;
  padding: 20px;
  border-radius: 20px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const LoginBackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  width: auto;
  height: 100%;
`;

const LoginMarvelLogo = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 6em;
`;

const Login = () => {
  return (
    <div>
      <LoginBackgroundImage src='https://imgc.allpostersimages.com/img/print/u-g-PWAB260.jpg?w=550&h=550&p=0'></LoginBackgroundImage>
      <LoginMarvelLogo
        src='/marvelLogo.png'
        alt='marvel logo'
      ></LoginMarvelLogo>
      <LoginContainer>
        <FormInput type='text' placeholder='Login' inputColor='red'></FormInput>
        <FormInput
          placeholder='Password'
          type='password'
          inputColor='red'
        ></FormInput>
        <Button
          name='Valider'
          borderColor='green'
          textHoverColor='white'
          fillingColor='green'
        ></Button>
      </LoginContainer>
    </div>
  );
};

export default Login;
