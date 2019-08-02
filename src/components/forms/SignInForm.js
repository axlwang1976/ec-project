import React, { Component } from 'react';
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

class SignInForm extends Component {
  state = { email: '', password: '' };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { emailSigninStartConnect } = this.props;
    emailSigninStartConnect({ email, password });
  };

  render() {
    const { email, password } = this.state;
    const { currentUser, googleSigninStartConnect } = this.props;

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
            onClick={googleSigninStartConnect}
            disabled={currentUser !== null}
          >
            {!currentUser ? 'Sign In with Google' : 'Already sign in'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
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
