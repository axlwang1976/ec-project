import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/homepage/Homepage';
import Shop from '../pages/shop/Shop';
import SignIn from '../pages/signin/SignIn';
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/checkout/Checkout';
import Collection from '../pages/collection/Collection';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Homepage />} />
      <Route exact path="/shop" render={() => <Shop />} />
      <Route exact path="/signin" render={() => <SignIn />} />
      <Route exact path="/cart" render={() => <Cart />} />
      <Route exact path="/checkout" render={() => <Checkout />} />
      <Route
        exact
        path="/shop/:title"
        render={routeProps => <Collection {...routeProps} />}
      />
    </Switch>
  );
}
