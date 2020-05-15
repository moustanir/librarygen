import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Classic from '../templates/Classic';

import Books from '../../utils/books.json';
import AutocompleteInput from '../molecules/AutoCompleteInput';
import Card from '../molecules/Card';

function getBooksTitle() {
  return Books.map((book, index) => {
    return book.title;
  });
}
const Home = props => {
  const theme = useContext(ThemeContext);

  const SearchContainer = styled.div`
    padding: 2em;
  `;
  const BooksContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${theme.sizes.laptop} {
      flex-direction: row;
    }
  `;
  return (
    <Classic>
      <SearchContainer>
        <AutocompleteInput
          inputColor='blue'
          label='Ecrivez le nom de votre livre'
          source={getBooksTitle()}
        ></AutocompleteInput>
        <h4>Récemment uploadé et partagé pour tout le monde</h4>
        <BooksContainer>
          {Books.map((book, index) => {
            return (
              <Card
                key={index}
                src={`/books/${book.id}.png`}
                name={book.title}
                id={book.id}
                description={book.description}
              ></Card>
            );
          })}
        </BooksContainer>
      </SearchContainer>
    </Classic>
  );
};

export default Home;
