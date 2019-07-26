import React from 'react';
import SignInForm from '../../components/forms/SignInForm';
import SignUpForm from '../../components/forms/SignUpForm';
import styles from './SignIn.module.scss';

export default function SignIn() {
  return (
    <div className={styles.signin}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
