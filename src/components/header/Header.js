import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export default function Header() {
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
        <Link className={styles.option} to="/signin">
          SIGN IN
        </Link>
      </div>
    </div>
  );
}
