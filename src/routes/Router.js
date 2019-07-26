import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/homepage/Homepage';
import Shop from '../pages/shop/Shop';
import SignIn from '../pages/signin/SignIn';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Homepage />} />
      <Route exact path="/shop" render={() => <Shop />} />
      <Route exact path="/signin" render={() => <SignIn />} />
    </Switch>
  );
}
