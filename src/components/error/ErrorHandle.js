import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorHandle.module.scss';
import errorImage from '../../assets/qIufhof.png';

export default class ErrorHandle extends Component {
  state = { hasErrored: false };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(`${error}: ${info}`);
  }

  render() {
    const { hasErrored } = this.state;
    const { children } = this.props;

    if (hasErrored) {
      return (
        <div className={styles.errorHandle}>
          <img src={errorImage} alt="error" />
          <div className={styles.errorText}>Something went wrong...</div>
        </div>
      );
    }
    return children;
  }
}

ErrorHandle.propTypes = {
  children: PropTypes.object,
};
