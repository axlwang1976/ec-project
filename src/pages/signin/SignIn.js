import React from 'react';
import SignInForm from '../../components/forms/SignInForm';
import styles from './SignIn.module.scss';

export default function SignIn() {
  return (
    <div className={styles.signin}>
      <SignInForm />
    </div>
  );
}
