import React, { useContext, useState, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Classic from '../templates/Classic';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Textarea from '../atoms/Textarea';

const UploadBooks = props => {
  const theme = useContext(ThemeContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [coverBook, setcoverBook] = useState(null);
  const [coverPreviewBook, setcoverPreviewBook] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [bookInfo, setBookInfo] = useState({
    name: '',
    surname: '',
    title: '',
    category: '',
    releaseDate: '',
    description: ''
  });

  const OnFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };
  const uploadCoverBook = event => {
    setcoverBook(event.target.files[0]);
    setcoverPreviewBook(URL.createObjectURL(event.target.files[0]));
  };
  // On file upload (click the upload button)
  const OnFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    setBookInfo({
      name: document.getElementById('author-name').value,
      surname: document.getElementById('author-surname').value,
      title: document.getElementById('book-title').value,
      category: document.getElementById('book-category').value,
      releaseDate: document.getElementById('book-releaseDate').value,
      description: document.getElementById('book-description').value
    });

    if (selectedFile === null || selectedFile === undefined) {
      setErrorMessage(
        "Veuillez charger un fichier avant d'essayer de soumettre votre upload"
      );
      return;
    }

    if (bookInfo.name === '') {
      setErrorMessage('Le champs noms doit être rempli');
      return;
    }
    if (bookInfo.surname === '') {
      setErrorMessage('Le champs prénom doit être rempli');
      return;
    }
    if (bookInfo.title === '') {
      setErrorMessage('Le champs titre doit être rempli');
      return;
    }
    if (bookInfo.category === '') {
      setErrorMessage('Le champs Categorie doit être rempli');
      return;
    }
    if (bookInfo.releaseDate === '') {
      setErrorMessage('Le champs date de sortie doit être rempli');
      return;
    }
    if (bookInfo.description === '') {
      setErrorMessage('Une description du livre doit être fournie');
      return;
    }

    formData.append('book', selectedFile, selectedFile.name);
    formData.append('book_cover', coverBook, coverBook.name);
    formData.append('bookInfo', bookInfo);

    console.log(selectedFile, coverBook, bookInfo);
    console.log(formData);
  };
  useEffect(() => {}, [bookInfo, selectedFile]);

  const triggerUploadfile = () => {
    document.getElementById('upload-cover').click();
  };
  return (
    <Classic>
      <UploadContainer size={[theme.sizes.laptop]}>
        <UploadCoverZone onClick={triggerUploadfile}>
          <h5>Couverture du livre</h5>
          <UploadCover
            id='upload-cover'
            type='file'
            onChange={uploadCoverBook}
          ></UploadCover>
          <CoverPreview src={coverPreviewBook} />
          <div></div>
        </UploadCoverZone>
        <section>
          <h5>Upload de votre livre</h5>
          <input type='file' onChange={OnFileChange} />
        </section>
        <InfoContainer>
          <Input
            inputColor={theme.colors.orange}
            name='author-name'
            inputName="Nom de l'auteur"
            id='author-name'
            required={true}
            type='text'
          ></Input>
          <Input
            inputColor={theme.colors.orange}
            name='author-surname'
            inputName="Prénom de l'auteur"
            id='author-surname'
            type='text'
            required={true}
          ></Input>
        </InfoContainer>
        <Input
          inputColor={theme.colors.orange}
          name='book-title'
          inputName='Titre'
          id='book-title'
          type='text'
          required={true}
        ></Input>
        <InfoContainer>
          <Input
            inputColor={theme.colors.orange}
            name='book-category'
            inputName='Categorie'
            id='book-category'
            type='text'
            required={true}
          ></Input>
          <Input
            id='book-releaseDate'
            name='book-releaseDate'
            inputName='Date de sortie'
            inputColor={theme.colors.orange}
            type='number'
          ></Input>
        </InfoContainer>
        <Textarea
          inputColor={theme.colors.orange}
          name='author-surnname'
          id='book-description'
          inputName='Description du livre'
        ></Textarea>
        <ButtonContainer>
          <Button
            name='Uploader ce livre'
            borderColor={theme.colors.primary}
            textHoverColor={theme.colors.white}
            fillingColor={theme.colors.primary}
            textColor={theme.colors.dark}
            IsInvert={false}
            onClick={OnFileUpload}
          ></Button>
        </ButtonContainer>
        <SpanErrorContainer color={theme.colors.red}>
          {errorMessage}
        </SpanErrorContainer>
      </UploadContainer>
    </Classic>
  );
};

const UploadCoverZone = styled.div`
  cursor: pointer;
  width: 30%;
  height: auto;
  padding: 5em;
  border: 2px dashed black;
`;
const UploadCover = styled.input`
  display: none;
`;
const CoverPreview = styled.img`
  height: auto;
  width: 100%;
  max-width: 20em;
  margin: 0 auto;
  text-align: center;
`;
const ButtonContainer = styled.div`
  div {
    margin: 0 auto;
    text-align: center;
    margin-top: 3em;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items:stretch
  width: 100%;
  justify-content: space-evenly;
`;

const SpanErrorContainer = styled.span`
  color: ${props => props.color};
`;

const UploadContainer = styled.div`
  @media ${props => props.size[0]} {
    padding: 10em;
  }
`;

export default UploadBooks;
