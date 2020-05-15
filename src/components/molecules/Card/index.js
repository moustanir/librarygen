import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({ src, description, name, id }) => {
  return (
    <CardContainer>
      <Image src={src} alt={`${name}`}></Image>
      <DescriptionContainer>
        <Title href={`/books/read/${id}`}>{name}</Title>
        <p>{description}</p>
      </DescriptionContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  max-width: 20em;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
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
