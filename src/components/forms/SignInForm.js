import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { signInWithGoogle } from '../../firebase/firebase';
import styles from './form.module.scss';

export default class SignInForm extends Component {
  state = { email: '', password: '' };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    const { currentUser } = this.props;

    return (
      <div className={styles.form}>
        <h2 className={styles.title}>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <ValidatorForm autoComplete="off" onSubmit={this.handleSubmit}>
          <TextValidator
            id="outlined-email"
            label="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onClick={signInWithGoogle}
            disabled={currentUser !== null}
          >
            {!currentUser ? 'Sign In with Google' : 'Already sign in'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

SignInForm.propTypes = {
  currentUser: PropTypes.object,
};
