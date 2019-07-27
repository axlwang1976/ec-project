import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { auth, createUserProfile } from '../../firebase/firebase';
import styles from './form.module.scss';

export default class SignUpForm extends Component {
  state = { displayName: '', email: '', password: '', confirmPassword: '' };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) alert('Password do not match!');
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className={styles.form}>
        <h2 className={styles.title}>I do not have an account</h2>
        <span>Sign up with your name, email and password</span>
        <ValidatorForm autoComplete="off" onSubmit={this.handleSubmit}>
          <TextValidator
            id="outlined-name"
            label="Name"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
          >
            Sign Up
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
