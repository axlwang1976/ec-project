import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { signupStart } from '../../redux/actions/userActions';
import styles from './form.module.scss';

function SignUpForm({ signupStartConnect }) {
  const [signupData, setSignupData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = signupData;

  const handleChange = e => {
    const { name, value } = e.target;

    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) alert('Password do not match!');

    signupStartConnect({ email, password, displayName });
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>I do not have an account</h2>
      <span>Sign up with your name, email and password</span>
      <ValidatorForm autoComplete="off" onSubmit={handleSubmit}>
        <TextValidator
          id="outlined-name"
          label="Name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          validators={['required']}
          errorMessages={['this field is required']}
          fullWidth
        />
        <TextValidator
          id="outlined-email-signup"
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
          id="outlined-password-signup"
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
        <TextValidator
          id="outlined-conform-password"
          label="Confirm Passeord"
          name="confirmPassword"
          value={confirmPassword}
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
        >
          Sign Up
        </Button>
      </ValidatorForm>
    </div>
  );
}

SignUpForm.propTypes = {
  signupStartConnect: PropTypes.func,
};

export default connect(
  null,
  { signupStartConnect: signupStart }
)(SignUpForm);
