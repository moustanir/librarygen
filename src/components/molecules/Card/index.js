import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({ src, description, name, id }) => {
  const theme = useContext(ThemeContext);
  return (
    <CardContainer sizeLimit={[theme.sizes.mobileS, theme.sizes.laptopL]}>
      <Image src={src} alt={`${name}`}></Image>
      <DescriptionContainer>
        <Title href={`/books/read/${id}`}>{name}</Title>
        <Content>{description}</Content>
      </DescriptionContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  border: 1px solid gray;
  box-shadow: 5px 5px #ccc;
  padding: 10px;
  margin: 10px;

  @media ${props => props.sizeLimit[0]} {
    flex-direction: column;
  }
  @media ${props => props.sizeLimit[1]} {
    flex-direction: row;
  }
`;

const Content = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
  max-width: 20em;
`;

const DescriptionContainer = styled.div`
  padding: 2px 16px;
`;

const Title = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

Card.propTypes = {
  src: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string
};

export default Card;
