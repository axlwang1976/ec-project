import React, { Component } from 'react';
import Header from './components/header/Header';
import Router from './routes/Router';
import { auth, createUserProfile } from './firebase/firebase';
import './App.css';

export default class App extends Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot =>
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          })
        );
      }

      this.setState({ currentUser: null });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <>
        <Header currentUser={currentUser} />
        <Router currentUser={currentUser} />
      </>
    );
  }
}
