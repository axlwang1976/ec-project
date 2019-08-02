import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cartIcon/CartIcon';
import { selectCurrentUser } from '../../redux/selectors/userSelectors';
import { selectIsShowing } from '../../redux/selectors/cartSelectors.js';
import CartDropdown from '../cartDropdown/CartDropdown';
import { signoutStart } from '../../redux/actions/userActions';

function Header({ currentUser, isShowing, signoutStartConnect }) {
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
            onClick={signoutStartConnect}
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isShowing: selectIsShowing,
});

Header.propTypes = {
  currentUser: PropTypes.object,
  isShowing: PropTypes.bool,
  signoutStartConnect: PropTypes.func,
};

export default connect(
  mapStateToProps,
  { signoutStartConnect: signoutStart }
)(Header);
