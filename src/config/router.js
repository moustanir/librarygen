import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import PrivateRoute from '../components/atoms/utils/privateRoute';
import Login from '../components/pages/login';
import Characters from '../components/pages/characters';
import CharacterDetail from '../components/pages/characterDetail';
import Home from '../components/pages/home';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/characters/:id' component={CharacterDetail}></Route>
        <PrivateRoute path='/characters' component={Characters}></PrivateRoute>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  );
};

export default Routes;
