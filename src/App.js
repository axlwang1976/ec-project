import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/header/Header';
import Router from './routes/Router';
import {
  auth,
  createUserProfile,
  firestore,
  convertCollectionsSnapshotToMap,
} from './firebase/firebase';
import { setCurrentUser } from './redux/actions/userActions';
import { updateCollections } from './redux/actions/shopActions';
import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUserConnect, updateCollectionsConnect } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot =>
          setCurrentUserConnect({ id: snapshot.id, ...snapshot.data() })
        );
      }
      setCurrentUserConnect(userAuth);
    });

    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollectionsConnect(collectionsMap);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

App.propTypes = {
  setCurrentUserConnect: PropTypes.func,
  updateCollectionsConnect: PropTypes.func,
};

export default connect(
  null,
  {
    setCurrentUserConnect: setCurrentUser,
    updateCollectionsConnect: updateCollections,
  }
)(App);
