import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../../components/forms/SignInForm';
import SignUpForm from '../../components/forms/SignUpForm';
import styles from './SignIn.module.scss';

export default function SignIn({ currentUser }) {
  return (
    <div className={styles.signin}>
      <SignInForm currentUser={currentUser} />
      <SignUpForm />
    </div>
  );
}

SignIn.propTypes = {
  currentUser: PropTypes.object,
};
