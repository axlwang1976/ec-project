import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '@material-ui/core/Button';
import CartItem from './CartItem';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
import styles from './CartDropdown.module.scss';

const CartDropdown = ({ cartItems }) => (
  <div className={styles.cartDropdown}>
    <div className={styles.cartItems}>
      {!cartItems.length ? (
        <span className={styles.emptyMessage}>Shopping list is empty</span>
      ) : (
        cartItems.map(cartItem => <CartItem {...cartItem} key={cartItem.id} />)
      )}
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
};

export default connect(mapStateToProps)(CartDropdown);
