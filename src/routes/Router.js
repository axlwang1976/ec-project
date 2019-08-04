import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Spinner from '../components/spinner/Spinner';
import ErrorHandle from '../components/error/ErrorHandle';
import '../transitions/fade.css';

const Homepage = lazy(() => import('../pages/homepage/Homepage'));
const Shop = lazy(() => import('../pages/shop/Shop'));
const SignIn = lazy(() => import('../pages/signin/SignIn'));
const Cart = lazy(() => import('../pages/cart/Cart'));
const Checkout = lazy(() => import('../pages/checkout/Checkout'));
const Collection = lazy(() => import('../pages/collection/Collection'));

export default function Router() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <ErrorHandle>
                <Suspense fallback={<Spinner />}>
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
                </Suspense>
              </ErrorHandle>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}
