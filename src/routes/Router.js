import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/homepage/Homepage';
import Shop from '../pages/shop/Shop';
import SignIn from '../pages/signin/SignIn';

export default function Router({ currentUser }) {
  return (
    <Switch>
      <Route exact path="/" render={() => <Homepage />} />
      <Route exact path="/shop" render={() => <Shop />} />
      <Route
        exact
        path="/signin"
        render={() => <SignIn currentUser={currentUser} />}
      />
    </Switch>
  );
}

Router.propTypes = {
  currentUser: PropTypes.object,
};
