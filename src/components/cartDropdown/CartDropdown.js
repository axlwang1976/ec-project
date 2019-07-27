import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CartItem from './CartItem';
import styles from './CartDropdown.module.scss';

const CartDropdown = ({ cartItems }) => (
  <div className={styles.cartDropdown}>
    <div className={styles.cartItems}>
      {cartItems.map(cartItem => (
        <CartItem {...cartItem} key={cartItem.id} />
      ))}
    </div>
    <Button
      variant="contained"
      color="primary"
      fullWidth
      className={styles.button}
    >
      CHECKOUT
    </Button>
  </div>
);

const mapStateToProps = ({ cart }) => ({ cartItems: cart.cartItems });

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
};

export default connect(mapStateToProps)(CartDropdown);
