import React, { useState } from 'react';
import { Page } from 'react-pdf';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import styled from 'styled-components';
import { Document } from 'react-pdf/dist/entry.webpack';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fa, faTimes } from '@fortawesome/free-solid-svg-icons';

const BookReader = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

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
    <div>
      <nav>
        <Button></Button>
        <Button></Button>
      </nav>
      <div style={{ width: 600 }}>
        <Document file={'/books/1.pdf'} onLoadSuccess={GetTotalPages}>
          <Page pageNumber={pageNumber} width={600} />
        </Document>
      </div>
    </div>
  );
};

export default BookReader;
