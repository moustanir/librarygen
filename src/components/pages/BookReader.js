import React, { useState, useContext } from 'react';
import { Page } from 'react-pdf';
import Button from '../atoms/Button';
import { ThemeContext } from 'styled-components';
import { Document } from 'react-pdf/dist/entry.webpack';
import Classic from '../templates/Classic';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fa, faTimes } from '@fortawesome/free-solid-svg-icons';

const BookReader = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const theme = useContext(ThemeContext);

  const NextPage = () => {
    if (pageNumber + 1 < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };
  const PreviousPage = () => {
    if (pageNumber - 1 > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const GetTotalPages = ({ numPages }) => {
    setTotalPages(numPages);
  };
  return (
    <Classic>
      <nav>
        <Button
          borderColor={theme.colors.primary}
          textHoverColor={theme.colors.white}
          fillingColor={theme.colors.primary}
          textColor={theme.colors.dark}
          IsInvert={true}
          name='Précédent'
          onClick={PreviousPage}
        ></Button>
        <Button
          borderColor={theme.colors.primary}
          textHoverColor={theme.colors.white}
          fillingColor={theme.colors.primary}
          textColor={theme.colors.dark}
          IsInvert={true}
          name='Suivant'
          onClick={NextPage}
        ></Button>
      </nav>
      <div style={{ width: '100em' }}>
        <Document file={'/books/1.pdf'} onLoadSuccess={GetTotalPages}>
          <Page pageNumber={pageNumber} width={100} scale={5} />
        </Document>
      </div>
    </Classic>
  );
};

export default BookReader;
