import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import styles from './form.module.scss';

class SignInForm extends Component {
  state = { email: '', password: '' };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      alert(error.message);
    }
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

SignInForm.propTypes = {
  currentUser: PropTypes.object,
};

export default connect(mapStateToProps)(SignInForm);
