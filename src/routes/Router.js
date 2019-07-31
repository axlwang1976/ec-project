import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../firebase/firebase';
import Homepage from '../pages/homepage/Homepage';
import Shop from '../pages/shop/Shop';
import SignIn from '../pages/signin/SignIn';
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/checkout/Checkout';
import Collection from '../pages/collection/Collection';
import { updateCollections } from '../redux/actions/shopActions';

class Router extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollectionsConnect } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollectionsConnect(collectionsMap);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
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
}

Router.propTypes = {
  updateCollectionsConnect: PropTypes.func,
};

export default connect(
  null,
  { updateCollectionsConnect: updateCollections }
)(Router);
