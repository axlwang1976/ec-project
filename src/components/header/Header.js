import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export default function Header({ currentUser }) {
  return (
    <div className={styles.header}>
      <Link className={styles.logoContainer} to="/">
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.options}>
        <Link className={styles.option} to="/shop">
          SHOP
        </Link>
        <Link className={styles.option} to="/shop">
          CONTACT
        </Link>
        {!currentUser ? (
          <Link className={styles.option} to="/signin">
            SIGN IN
          </Link>
        ) : (
          <div
            className={styles.option}
            onClick={() => auth.signOut()}
            onKeyPress={() => {}}
            role="button"
            tabIndex={0}
          >
            SIGN OUT
          </div>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  currentUser: PropTypes.object,
};
