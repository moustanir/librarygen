import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';

import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import UploadBooks from '../components/pages/UploadBooks';
import BooksList from '../components/pages/BooksList';
import UserBooks from '../components/pages/UserBooks';
import BookDetails from '../components/pages/BookDetails';
import BookReader from '../components/pages/BookReader';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/books' component={BooksList} />
        <Route exact path='/user/books' component={UserBooks} />
        <Route exact path='/books/upload' component={UploadBooks} />
        <Route exact path='/books/:id' component={BookDetails} />
        <Route exact path='/books/read/:id' component={BookReader} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  );
};

export default Routes;
