import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { selectCurrentUser } from '../../redux/selectors/userSelectors';
import {
  googleSigninStart,
  emailSigninStart,
} from '../../redux/actions/userActions';
import styles from './form.module.scss';

function SignInForm({
  currentUser,
  emailSigninStartConnect,
  googleSigninStartConnect,
}) {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const { email, password } = userData;

  const handleChange = e => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    emailSigninStartConnect({ email, password });
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <ValidatorForm autoComplete="off" onSubmit={handleSubmit}>
        <TextValidator
          id="outlined-email"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          validators={['required']}
          errorMessages={['this field is required']}
          type="email"
          fullWidth
        />
        <TextValidator
          id="outlined-password"
          label="Passeord"
          name="password"
          value={password}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          validators={['required']}
          errorMessages={['this field is required']}
          type="password"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={styles.button}
          disabled={currentUser !== null}
        >
          {!currentUser ? 'Sign In' : 'Already sign in'}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          className={styles.button}
          onClick={googleSigninStartConnect}
          disabled={currentUser !== null}
        >
          {!currentUser ? 'Sign In with Google' : 'Already sign in'}
        </Button>
      </ValidatorForm>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

SignInForm.propTypes = {
  currentUser: PropTypes.object,
  googleSigninStartConnect: PropTypes.func,
  emailSigninStartConnect: PropTypes.func,
};

export default connect(
  mapStateToProps,
  {
    googleSigninStartConnect: googleSigninStart,
    emailSigninStartConnect: emailSigninStart,
  }
)(SignInForm);
