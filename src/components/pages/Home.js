import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Classic from '../templates/Classic';

import Books from '../../utils/books.json';
import AutocompleteInput from '../molecules/AutoCompleteInput';
import Card from '../molecules/Card';
import { useHistory } from 'react-router-dom';

const Home = props => {
  const theme = useContext(ThemeContext);

  const history = useHistory();
  function getBooksTitle() {
    return Books.map((book, index) => {
      return book.title;
    });
  }
  const ReadBook = bookName => {
    if (bookName !== null || bookName !== undefined) {
      console.log(bookName);
      let book = Books.find(book => {
        return book.title === bookName;
      });
      history.push(`/book/read/${book.id}`);
    }
  };
  return (
    <Classic>
      <SearchContainer>
        <AutocompleteInput
          inputColor='blue'
          name='searchbooks'
          label='Ecrivez le nom de votre livre'
          source={getBooksTitle()}
          onClickAction={ReadBook}
        ></AutocompleteInput>
        <h4>Récemment uploadé et partagé pour tout le monde</h4>
        <BooksContainer colorBackground={theme.colors.lightPrimary}>
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
const BooksContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color:${props => props.colorBackground}
    flex: 50%;
  `;
const SearchContainer = styled.div`
  padding: 2em;
`;

export default Home;
