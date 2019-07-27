import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckoutItem.module.scss';

export default function CheckoutItem({ name, price, qty, imageUrl }) {
  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>{qty}</span>
      <span className={styles.price}>{price}</span>
      <div className={styles.removeButton}>&#10005;</div>
    </div>
  );
}

CheckoutItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  qty: PropTypes.number,
  imageUrl: PropTypes.string,
};
