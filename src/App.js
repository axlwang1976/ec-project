import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/header/Header';
import Router from './routes/Router';
import { fetchCollectionsStart } from './redux/actions/shopActions';
import { checkUser } from './redux/actions/userActions';
import './App.css';

function App({ fetchCollectionsStartConnect, checkUserConnect }) {
  useEffect(() => {
    checkUserConnect();
    fetchCollectionsStartConnect();
  }, [fetchCollectionsStartConnect, checkUserConnect]);

  return (
    <>
      <Header />
      <Router />
    </>
  );
}

App.propTypes = {
  fetchCollectionsStartConnect: PropTypes.func,
  checkUserConnect: PropTypes.func,
};

export default connect(
  null,
  {
    fetchCollectionsStartConnect: fetchCollectionsStart,
    checkUserConnect: checkUser,
  }
)(App);
