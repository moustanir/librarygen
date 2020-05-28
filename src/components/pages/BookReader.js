import React, { useState, useContext } from 'react';
import { Page } from 'react-pdf';
import { ThemeContext } from 'styled-components';
import { Document } from 'react-pdf/dist/entry.webpack';
import Classic from '../templates/Classic';
import Paginator from '../molecules/Paginator';

const BookReader = props => {
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
      <div style={{ width: '100%' }}>
        <Document
          file={`/books/${props.match.params.id}.pdf`}
          onLoadSuccess={GetTotalPages}
        >
          <Page pageNumber={pageNumber} width={100} scale={3.5} />
        </Document>
      </div>
      <Paginator
        totalElements={totalPages}
        actualPage={pageNumber}
        previousFunc={PreviousPage}
        previousTextButton='Précédent'
        nextFunc={NextPage}
        nextTextButton='Suivant'
      />
    </Classic>
  );
};

export default BookReader;
