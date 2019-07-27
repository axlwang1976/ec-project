import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/header/Header';
import Router from './routes/Router';
import { auth, createUserProfile } from './firebase/firebase';
import { setCurrentUser } from './redux/actions/userActions';
import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUserConnect } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot =>
          setCurrentUserConnect({ id: snapshot.id, ...snapshot.data() })
        );
      }
      setCurrentUserConnect(userAuth);
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
};

export default connect(
  null,
  { setCurrentUserConnect: setCurrentUser }
)(App);
