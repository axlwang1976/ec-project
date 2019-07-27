import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  removeCartItem,
  incQty,
  decQty,
} from '../../redux/actions/cartActions';
import styles from './CheckoutItem.module.scss';

function CheckoutItem({
  id,
  name,
  price,
  qty,
  imageUrl,
  removeCartItemConnent,
  incQtyConnect,
  decQtyConnect,
}) {
  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div
          className={styles.arrow}
          onClick={() => decQtyConnect(id)}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          &#10094;
        </div>
        <div className={styles.value}>{qty}</div>
        <div
          className={styles.arrow}
          onClick={() => incQtyConnect(id)}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}</span>
      <div
        className={styles.removeButton}
        onClick={() => removeCartItemConnent(id)}
        onKeyPress={() => {}}
        role="button"
        tabIndex={0}
      >
        &#10005;
      </div>
    </div>
  );
}

CheckoutItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  qty: PropTypes.number,
  imageUrl: PropTypes.string,
  removeCartItemConnent: PropTypes.func,
  incQtyConnect: PropTypes.func,
  decQtyConnect: PropTypes.func,
};

export default connect(
  null,
  {
    removeCartItemConnent: removeCartItem,
    incQtyConnect: incQty,
    decQtyConnect: decQty,
  }
)(CheckoutItem);
