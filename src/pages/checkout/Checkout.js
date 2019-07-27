import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/selectors/cartSelectors';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import styles from './Checkout.module.scss';

function Checkout({ cartItems, total }) {
  return (
    <div className={styles.checkoutPage}>
      <div className={styles.checkoutHeader}>
        <div className={styles.headerBlock}>
          <span>Product</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Description</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Price</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className={styles.total}>TOTAL: ${total}</div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

Checkout.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number,
};

export default connect(mapStateToProps)(Checkout);
