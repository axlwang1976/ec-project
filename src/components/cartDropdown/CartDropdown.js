import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './CartDropdown.module.scss';

const CartDropdown = () => (
  <div className={styles.cartDropdown}>
    <div className={styles.cartItems}></div>
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

export default CartDropdown;
