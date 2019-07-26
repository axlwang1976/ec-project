import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';

function Header({ currentUser, isShowing }) {
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
        <div className={styles.option} to="/cart">
          <CartIcon />
        </div>
        {isShowing && <CartDropdown />}
      </div>
    </div>
  );
}

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  isShowing: cart.isShowing,
});

Header.propTypes = {
  currentUser: PropTypes.object,
  isShowing: PropTypes.bool,
};

export default connect(mapStateToProps)(Header);
